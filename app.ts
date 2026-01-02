import { ColorText, ColorType, Icons, BoxChars } from './color';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

/**
 * Beautiful Logger with modern design and icons
 */
class Logger {
	private readonly _name: string;
	private readonly _logDir: string;
	private readonly _logToFile: boolean;

	constructor(name: string, logToFile: boolean = true) {
		this._name = name;
		this._logToFile = logToFile;
		
		const isExecutable = (process as any).pkg !== undefined;
		
		if (isExecutable) {
			this._logDir = path.join(path.dirname(process.execPath), 'logs');
		} else {
			this._logDir = path.join(process.cwd(), 'logs');
		}
		
		if (this._logToFile && !fs.existsSync(this._logDir)) {
			fs.mkdirSync(this._logDir, { recursive: true });
		}
	}
	
	/**
	 * Debug level log
	 */
	debug(...message: string[]): void {
		const formatted = this.formatMessage('DEBUG', message.join(' '));
		console.debug(formatted);
		this.writeToFile('DEBUG', message.join(' '));
	}

	/**
	 * Success level log
	 */
	success(...message: string[]): void {
		const formatted = this.formatMessage('SUCCESS', message.join(' '));
		console.log(formatted);
		this.writeToFile('SUCCESS', message.join(' '));
	}

	/**
	 * Info level log
	 */
	info(...message: string[]): void {
		const formatted = this.formatMessage('INFO', message.join(' '));
		console.info(formatted);
		this.writeToFile('INFO', message.join(' '));
	}

	/**
	 * Warning level log
	 */
	warn(...message: string[]): void {
		const formatted = this.formatMessage('WARN', message.join(' '));
		console.warn(formatted);
		this.writeToFile('WARN', message.join(' '));
	}
	
	/**
	 * Error level log
	 */
	error(...message: string[]): void {
		const formatted = this.formatMessage('ERROR', message.join(' '));
		console.error(formatted);
		this.writeToFile('ERROR', message.join(' '));
	}

	/**
	 * Activity log with custom data
	 */
	activity(title: string, data?: Record<string, any>): void {
		const icon = Icons.ACTIVITY;
		const time = this.getTimestamp();
		const nameTag = this.createTag(this._name, ColorText.ACTIVITY);
		
		let message = `${chalk.dim(time)} ${nameTag} ${icon} ${ColorText.ACTIVITY.bold(title)}`;
		
		if (data) {
			const dataStr = Object.entries(data)
				.map(([key, value]) => `${chalk.dim(key)}: ${chalk.white(value)}`)
				.join(chalk.dim(' │ '));
			message += `\n  ${chalk.dim('└─')} ${dataStr}`;
		}
		
		console.log(message);
		this.writeToFile('ACTIVITY', `${title} ${data ? JSON.stringify(data) : ''}`);
	}

	/**
	 * Format message with modern design
	 */
	private formatMessage(level: ColorType, message: string): string {
		const icon = Icons[level as keyof typeof Icons] || '';
		const time = this.getTimestamp();
		const nameTag = this.createTag(this._name, ColorText[level]);
		const levelTag = this.createTag(level, ColorText[level]);
		const coloredMessage = ColorText[level](message);
		
		return `${chalk.dim(time)} ${nameTag} ${levelTag} ${icon}  ${coloredMessage}`;
	}

	/**
	 * Create a beautiful tag
	 */
	private createTag(text: string, color: any): string {
		return color(`[${text}]`);
	}

	/**
	 * Get formatted timestamp
	 */
	private getTimestamp(): string {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		return `${hours}:${minutes}:${seconds}`;
	}

	/**
	 * Write log to file
	 */
	private writeToFile(level: string, message: string): void {
		if (!this._logToFile) return;

		const now = new Date();
		const dateStr = now.toISOString().split('T')[0];
		const timeStr = now.toLocaleString('th-TH', { 
			timeZone: 'Asia/Bangkok',
			year: 'numeric',
			month: '2-digit', 
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});

		const logFileName = `${dateStr}-${level.toLowerCase()}.log`;
		const logFilePath = path.join(this._logDir, logFileName);

		const logEntry = `[${timeStr}] [${process.pid}] [${this._name}] [${level}] ${message}\n`;

		try {
			fs.appendFileSync(logFilePath, logEntry, 'utf8');
		} catch (error) {
			console.error('Failed to write to log file:', error);
		}
	}

	/**
	 * Print a beautiful section divider
	 */
	divider(title?: string): void {
		const width = 60;
		if (title) {
			const line = BoxChars.horizontal.repeat((width - title.length - 2) / 2);
			console.log(chalk.dim(`${line} ${chalk.white.bold(title)} ${line}`));
		} else {
			console.log(chalk.dim(BoxChars.horizontal.repeat(width)));
		}
	}

	/**
	 * Print a beautiful box
	 */
	box(title: string, content: string[]): void {
		const width = 60;
		const topLine = BoxChars.topLeft + BoxChars.horizontal.repeat(width - 2) + BoxChars.topRight;
		const bottomLine = BoxChars.bottomLeft + BoxChars.horizontal.repeat(width - 2) + BoxChars.bottomRight;
		
		console.log(chalk.cyan(topLine));
		console.log(chalk.cyan(BoxChars.vertical) + chalk.white.bold(` ${title}`.padEnd(width - 1)) + chalk.cyan(BoxChars.vertical));
		console.log(chalk.cyan(BoxChars.verticalRight) + chalk.dim(BoxChars.horizontal.repeat(width - 2)) + chalk.cyan(BoxChars.verticalLeft));
		
		content.forEach(line => {
			console.log(chalk.cyan(BoxChars.vertical) + chalk.white(` ${line}`.padEnd(width - 1)) + chalk.cyan(BoxChars.vertical));
		});
		
		console.log(chalk.cyan(bottomLine));
	}
}

export default Logger;
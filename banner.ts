import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';
import boxen from 'boxen';
import Table from 'cli-table3';

/**
 * Beautiful startup banner with ASCII art
 */
export class Banner {
    /**
     * Display the main startup banner
     */
    static async showStartup(): Promise<void> {
        console.clear();
        
        // ASCII Art Title
        const title = figlet.textSync('DT Payments', {
            font: 'ANSI Shadow',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        });
        
        console.log(gradient.pastel.multiline(title));
        console.log();
        
        // Info Box
        const infoBox = boxen(
            chalk.white.bold('Discord Payment System') + '\n' +
            chalk.dim('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━') + '\n' +
            chalk.cyan('Version:   ') + chalk.white('1.0.0') + '\n' +
            chalk.cyan('Author:    ') + chalk.white('Your Team') + '\n' +
            chalk.cyan('License:   ') + chalk.white('MIT') + '\n' +
            chalk.cyan('Platform:  ') + chalk.white('Discord.js v14'),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'cyan',
                backgroundColor: '#1a1a1a'
            }
        );
        
        console.log(infoBox);
        console.log();
    }

    /**
     * Display loading animation
     */
    static showLoading(text: string): void {
        process.stdout.write(chalk.cyan('  ⠋ ') + chalk.white(text) + '\r');
    }

    /**
     * Display system information table
     */
    static showSystemInfo(): void {
        const table = new Table({
            head: [
                chalk.cyan.bold('System Information'),
                chalk.white.bold('Value')
            ],
            style: {
                head: [],
                border: ['cyan']
            },
            chars: {
                'top': '─',
                'top-mid': '┬',
                'top-left': '╭',
                'top-right': '╮',
                'bottom': '─',
                'bottom-mid': '┴',
                'bottom-left': '╰',
                'bottom-right': '╯',
                'left': '│',
                'left-mid': '├',
                'mid': '─',
                'mid-mid': '┼',
                'right': '│',
                'right-mid': '┤',
                'middle': '│'
            }
        });

        table.push(
            [chalk.dim('Node Version'), chalk.white(process.version)],
            [chalk.dim('Platform'), chalk.white(process.platform)],
            [chalk.dim('Architecture'), chalk.white(process.arch)],
            [chalk.dim('Memory Usage'), chalk.white(`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)],
            [chalk.dim('Process ID'), chalk.white(process.pid.toString())]
        );

        console.log(table.toString());
        console.log();
    }

    /**
     * Display ready message
     */
    static showReady(botName: string, guildCount: number): void {
        const readyBox = boxen(
            chalk.green.bold('✓ Bot is Ready!') + '\n\n' +
            chalk.white('Logged in as: ') + chalk.cyan.bold(botName) + '\n' +
            chalk.white('Serving: ') + chalk.yellow.bold(`${guildCount} guilds`),
            {
                padding: 1,
                margin: { top: 1, bottom: 1, left: 2, right: 2 },
                borderStyle: 'double',
                borderColor: 'green',
                align: 'center'
            }
        );
        
        console.log(readyBox);
    }

    /**
     * Display feature list
     */
    static showFeatures(): void {
        console.log(chalk.cyan.bold('  📦 Features'));
        console.log(chalk.dim('  ├─ ') + chalk.white('Payment Processing (PromptPay & TrueWallet)'));
        console.log(chalk.dim('  ├─ ') + chalk.white('Stock Management System'));
        console.log(chalk.dim('  ├─ ') + chalk.white('QR Code Generation'));
        console.log(chalk.dim('  ├─ ') + chalk.white('Database Integration (MongoDB & Supabase)'));
        console.log(chalk.dim('  └─ ') + chalk.white('Cloud Storage (AWS S3)'));
        console.log();
    }

    /**
     * Display command list
     */
    static showCommands(commands: string[]): void {
        console.log(chalk.cyan.bold('  ⚙️  Available Commands'));
        commands.forEach((cmd, index) => {
            const isLast = index === commands.length - 1;
            const prefix = isLast ? '  └─ ' : '  ├─ ';
            console.log(chalk.dim(prefix) + chalk.yellow('/' + cmd));
        });
        console.log();
    }

    /**
     * Display error banner
     */
    static showError(title: string, message: string): void {
        const errorBox = boxen(
            chalk.red.bold('✗ ' + title) + '\n\n' +
            chalk.white(message),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'red',
                align: 'center'
            }
        );
        
        console.log(errorBox);
    }

    /**
     * Display success banner
     */
    static showSuccess(message: string): void {
        console.log(chalk.green.bold('  ✓ ') + chalk.white(message));
    }

    /**
     * Display separator line
     */
    static separator(char: string = '─', length: number = 60): void {
        console.log(chalk.dim(char.repeat(length)));
    }

    /**
     * Display animated dots
     */
    static dots(count: number = 3): string {
        return '.'.repeat(count);
    }
}

export default Banner;
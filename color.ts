import chalk from 'chalk';

type ColorType = "RESET" | "DEBUG" | "SUCCESS" | "INFO" | "WARN" | "ERROR" | "ACTIVITY";

/**
 * Modern color scheme with icons
 */
const ColorText = {
    RESET: chalk.reset,
    DEBUG: chalk.cyan,
    SUCCESS: chalk.green,
    INFO: chalk.blue,
    WARN: chalk.yellow,
    ERROR: chalk.red,
    ACTIVITY: chalk.magenta,
    DIM: chalk.dim,
    BOLD: chalk.bold,
    UNDERLINE: chalk.underline
};

/**
 * Icons for different log levels
 */
const Icons = {
    DEBUG: '🔍',
    SUCCESS: '✅',
    INFO: 'ℹ️',
    WARN: '⚠️',
    ERROR: '❌',
    ACTIVITY: '⚡',
    BOT: '🤖',
    DATABASE: '💾',
    NETWORK: '🌐',
    COMMAND: '⚙️',
    EVENT: '📡',
    USER: '👤',
    GUILD: '🏰',
    TIME: '⏰',
    PROCESS: '🔄',
    ARROW: '➜',
    CHECK: '✓',
    CROSS: '✗',
    STAR: '⭐',
    ROCKET: '🚀',
    FIRE: '🔥',
    SPARKLES: '✨'
};

/**
 * Box drawing characters for beautiful borders
 */
const BoxChars = {
    topLeft: '╭',
    topRight: '╮',
    bottomLeft: '╰',
    bottomRight: '╯',
    horizontal: '─',
    vertical: '│',
    verticalRight: '├',
    verticalLeft: '┤',
    horizontalDown: '┬',
    horizontalUp: '┴',
    cross: '┼'
};

export {
    ColorType,
    ColorText,
    Icons,
    BoxChars
};
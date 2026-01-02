# 📝 Beautiful Logger System

Modern, colorful, and feature-rich logging system for Node.js applications with TypeScript support.

## ✨ Features

- 🎨 **Beautiful Colors** - Using `chalk` for vibrant, readable output
- 🎯 **Multiple Log Levels** - Debug, Info, Success, Warn, Error, Activity
- 📦 **Icons & Emojis** - Visual indicators for each log type
- 📁 **File Logging** - Automatic log file creation by date and level
- 🎭 **Activity Tracking** - Special format for tracking user activities
- 📊 **Tables & Boxes** - Formatted output for structured data
- ⏰ **Timestamps** - Automatic timestamp on every log
- 🔧 **TypeScript** - Full type safety and IntelliSense support

## 📦 Installation

```bash
npm install chalk
# or
yarn add chalk
```

## 🚀 Quick Start

### Basic Usage

```typescript
import Logger from './utils/logger/app';

const logger = new Logger('MyApp');

logger.info('Application started');
logger.success('Connected to database');
logger.warn('High memory usage detected');
logger.error('Failed to connect to API');
logger.debug('Processing user data...');
```

### Output Example

```
22:06:29 [MyApp] [INFO] ℹ️  Application started
22:06:30 [MyApp] [SUCCESS] ✅  Connected to database
22:06:31 [MyApp] [WARN] ⚠️  High memory usage detected
22:06:32 [MyApp] [ERROR] ❌  Failed to connect to API
22:06:33 [MyApp] [DEBUG] 🔍  Processing user data...
```

## 📖 API Reference

### Constructor

```typescript
new Logger(name: string, logToFile: boolean = true)
```

- `name` - The name/identifier for this logger instance
- `logToFile` - Enable/disable file logging (default: true)

### Methods

#### Log Levels

```typescript
logger.debug(...message: string[]): void
logger.info(...message: string[]): void
logger.success(...message: string[]): void
logger.warn(...message: string[]): void
logger.error(...message: string[]): void
```

**Example:**
```typescript
logger.info('Server', 'is', 'running'); // Multi-argument support
logger.error('Connection failed');
```

#### Activity Tracking

```typescript
logger.activity(title: string, data?: Record<string, any>): void
```

Track user actions, commands, or events with structured data.

**Example:**
```typescript
logger.activity('User Login', {
    username: 'john_doe',
    ip: '192.168.1.1',
    timestamp: Date.now()
});
```

**Output:**
```
22:06:35 [MyApp] ⚡ User Login
  └─ username: john_doe │ ip: 192.168.1.1 │ timestamp: 1735862795000
```

#### Visual Helpers

##### Divider

```typescript
logger.divider(title?: string): void
```

Create a visual separator line.

**Example:**
```typescript
logger.divider(); // Plain line
logger.divider('INITIALIZATION'); // Line with title
```

**Output:**
```
────────────────────────────────────────────────────────────
────────────────────── INITIALIZATION ──────────────────────
```

##### Box

```typescript
logger.box(title: string, content: string[]): void
```

Display content in a beautiful bordered box.

**Example:**
```typescript
logger.box('Server Info', [
    'Host: localhost',
    'Port: 3000',
    'Environment: production'
]);
```

**Output:**
```
╭────────────────────────────────────────────────────────────╮
│ Server Info                                                │
├────────────────────────────────────────────────────────────┤
│ Host: localhost                                            │
│ Port: 3000                                                 │
│ Environment: production                                    │
╰────────────────────────────────────────────────────────────╯
```

## 🎨 Banner System

The banner system provides beautiful ASCII art and formatted displays.

```typescript
import Banner from './utils/logger/banner';

// Show startup banner
await Banner.showStartup();

// Show system information
Banner.showSystemInfo();

// Show features
Banner.showFeatures();

// Show available commands
Banner.showCommands(['help', 'start', 'stop']);

// Show ready message
Banner.showReady('MyBot#1234', 5);

// Show success/error
Banner.showSuccess('Operation completed');
Banner.showError('Fatal Error', 'Database connection failed');

// Separator
Banner.separator();
```

### Output Examples

**Startup Banner:**
```
██╗      ██████╗  ██████╗  ██████╗ ███████╗██████╗ 
██║     ██╔═══██╗██╔════╝ ██╔════╝ ██╔════╝██╔══██╗
██║     ██║   ██║██║  ███╗██║  ███╗█████╗  ██████╔╝
██║     ██║   ██║██║   ██║██║   ██║██╔══╝  ██╔══██╗
███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗██║  ██║
╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
```

## 📁 File Logging

Logs are automatically saved to files organized by date and level:

```
logs/
├── 2026-01-02-debug.log
├── 2026-01-02-info.log
├── 2026-01-02-success.log
├── 2026-01-02-warn.log
├── 2026-01-02-error.log
└── 2026-01-02-activity.log
```

**Log File Format:**
```
[1/2/2026, 10:06:29 PM] [56508] [MyApp] [INFO] Application started
[1/2/2026, 10:06:30 PM] [56508] [MyApp] [SUCCESS] Connected to database
```

## 🎯 Log Levels & Icons

| Level | Icon | Color | Use Case |
|-------|------|-------|----------|
| DEBUG | 🔍 | Cyan | Development/debugging information |
| INFO | ℹ️ | Blue | General information messages |
| SUCCESS | ✅ | Green | Successful operations |
| WARN | ⚠️ | Yellow | Warning messages |
| ERROR | ❌ | Red | Error messages |
| ACTIVITY | ⚡ | Magenta | User actions/events tracking |

## 🎨 Available Icons

```typescript
import { Icons } from './utils/logger/color';

Icons.DEBUG      // 🔍
Icons.SUCCESS    // ✅
Icons.INFO       // ℹ️
Icons.WARN       // ⚠️
Icons.ERROR      // ❌
Icons.ACTIVITY   // ⚡
Icons.BOT        // 🤖
Icons.DATABASE   // 💾
Icons.NETWORK    // 🌐
Icons.COMMAND    // ⚙️
Icons.EVENT      // 📡
Icons.USER       // 👤
Icons.GUILD      // 🏰
Icons.TIME       // ⏰
Icons.ROCKET     // 🚀
Icons.FIRE       // 🔥
Icons.SPARKLES   // ✨
```

## 🔧 Advanced Usage

### Multiple Logger Instances

```typescript
const dbLogger = new Logger('Database');
const apiLogger = new Logger('API');
const authLogger = new Logger('Auth');

dbLogger.success('Connection established');
apiLogger.info('Fetching user data');
authLogger.warn('Failed login attempt');
```

### Disable File Logging

```typescript
const logger = new Logger('MyApp', false); // No file logging
```

### Custom Activity Tracking

```typescript
// Track command execution
logger.activity('Command Executed', {
    command: 'payment',
    user: 'JohnDoe',
    guild: 'MyServer',
    duration: '150ms'
});

// Track errors with context
logger.activity('Error Occurred', {
    error: 'Database timeout',
    code: 'E_TIMEOUT',
    retries: 3
});
```

## 📊 Best Practices

1. **Use Appropriate Log Levels**
   ```typescript
   logger.debug('Variable value:', someVar); // Development only
   logger.info('Server started on port 3000'); // General info
   logger.success('User registered successfully'); // Success confirmation
   logger.warn('API rate limit approaching'); // Warnings
   logger.error('Failed to connect to database'); // Errors
   ```

2. **Structured Activity Logs**
   ```typescript
   logger.activity('User Action', {
       action: 'purchase',
       user: userId,
       amount: 100,
       timestamp: Date.now()
   });
   ```

3. **Visual Organization**
   ```typescript
   logger.divider('STARTUP');
   logger.info('Loading configuration...');
   logger.info('Connecting to database...');
   logger.success('Application ready');
   logger.divider();
   ```

## 🎭 Complete Example

```typescript
import Logger from './utils/logger/app';
import Banner from './utils/logger/banner';

class Application {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('Application');
    }

    async start() {
        // Show beautiful banner
        await Banner.showStartup();
        Banner.showSystemInfo();
        
        this.logger.divider('INITIALIZATION');
        this.logger.info('Starting application...');
        
        try {
            // Simulate loading
            await this.loadConfig();
            await this.connectDatabase();
            await this.startServer();
            
            this.logger.divider('READY');
            Banner.showReady('MyApp v1.0.0', 5);
            
        } catch (error) {
            this.logger.error('Startup failed:', error.message);
            Banner.showError('Startup Failed', error.message);
        }
    }

    async loadConfig() {
        this.logger.info('Loading configuration...');
        // Load config logic
        this.logger.success('Configuration loaded');
    }

    async connectDatabase() {
        this.logger.info('Connecting to database...');
        // Database logic
        this.logger.activity('Database Connected', {
            host: 'localhost',
            port: 27017,
            database: 'myapp'
        });
    }

    async startServer() {
        this.logger.info('Starting server...');
        // Server logic
        this.logger.success('Server listening on port 3000');
    }
}

// Start the app
const app = new Application();
app.start();
```

## 📝 TypeScript Support

Full TypeScript definitions included:

```typescript
type ColorType = "RESET" | "DEBUG" | "SUCCESS" | "INFO" | "WARN" | "ERROR" | "ACTIVITY";

class Logger {
    constructor(name: string, logToFile?: boolean);
    debug(...message: string[]): void;
    info(...message: string[]): void;
    success(...message: string[]): void;
    warn(...message: string[]): void;
    error(...message: string[]): void;
    activity(title: string, data?: Record<string, any>): void;
    divider(title?: string): void;
    box(title: string, content: string[]): void;
}
```

## 🔍 Troubleshooting

### Colors not showing in terminal

Make sure your terminal supports ANSI colors. Windows users should use Windows Terminal or PowerShell 7+.

### File logging not working

Check write permissions for the `logs/` directory:
```bash
mkdir logs
chmod 755 logs
```

### TypeScript errors

Make sure chalk is installed:
```bash
npm install chalk
npm install --save-dev @types/node
```

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Credits

- Built with [chalk](https://github.com/chalk/chalk)
- Inspired by modern logging best practices
- Part of DT Payments Bot project

---

<div align="center">
  Made with ❤️ for beautiful console outputs
</div>

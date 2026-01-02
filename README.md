<div align="center">

# 💰 DT Payments Bot

<img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">

**ระบบชำระเงินอัตโนมัติสำหรับ Discord**

เติมเงิน PromptPay & TrueWallet | จัดการสต็อก | QR Code Generation

[Features](#-features) • [Installation](#-installation) • [Commands](#-commands) • [Configuration](#-configuration)

---

</div>

## ✨ Features

### 💳 Payment System
- **PromptPay Integration** - รองรับการชำระเงินผ่าน PromptPay
- **TrueWallet Support** - รองรับ TrueWallet Gift Voucher
- **QR Code Generation** - สร้าง QR Code อัตโนมัติ
- **Auto Verification** - ตรวจสอบการชำระเงินอัตโนมัติ

### 📦 Stock Management
- **Inventory System** - ระบบจัดการสินค้าและสต็อก
- **Auto Delivery** - ส่งสินค้าอัตโนมัติหลังชำระเงิน
- **Stock Tracking** - ติดตามสต็อกแบบ Real-time

### 🔧 Technical Features
- **OOP Architecture** - เขียนด้วย Object-Oriented Programming
- **Type Safety** - Full TypeScript support
- **Database Integration** - MongoDB & Supabase
- **Cloud Storage** - AWS S3 integration
- **Beautiful Logging** - Console logs สวยงามพร้อม colors & icons

## 📋 Requirements

- Node.js v18.0.0 or higher
- npm or yarn
- Discord Bot Token
- MongoDB (optional)
- Supabase Account (optional)
- AWS S3 (optional)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/dt-payments.git
cd dt-payments
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Build the project
```bash
npm run build
```

### 5. Start the bot
```bash
npm start
```

## 🎮 Commands

| Command | Description | Permission |
|---------|-------------|-----------|
| `/payment` | แสดงช่องทางการชำระเงิน | Admin |
| `/setup-stock` | ตั้งค่าระบบสต็อก | Admin |
| `/buy` | ซื้อสินค้า | Everyone |

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Discord Configuration
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here

# Database Configuration (Optional)
MONGODB_URI=mongodb://localhost:27017/dt-payments
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# AWS S3 Configuration (Optional)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket_name
AWS_REGION=ap-southeast-1

# Payment Configuration
PROMPTPAY_ID=your_promptpay_id
```

### Config File

Edit `src/config/config.ts` for additional configuration:

```typescript
export default {
    token: process.env.DISCORD_TOKEN || '',
    clientId: process.env.CLIENT_ID || '',
    // Add your custom configuration here
}
```

## 📁 Project Structure

```
dt-payments/
├── src/
│   ├── core/               # Core framework classes
│   │   ├── BaseCommand.ts
│   │   ├── BaseEvent.ts
│   │   └── BotClient.ts
│   ├── commands/          # Command implementations
│   │   ├── payments/
│   │   ├── stock/
│   │   └── buy/
│   ├── events/            # Event handlers
│   ├── utils/             # Utility functions
│   │   ├── logger/        # Beautiful logging system
│   │   ├── database/      # Database connections
│   │   ├── cloud/         # Cloud storage
│   │   └── qrcode/        # QR code generation
│   ├── config/            # Configuration files
│   └── index.ts           # Application entry point
├── assets/                # Static assets
├── logs/                  # Application logs
└── dist/                  # Compiled JavaScript
```

## 🎨 Features Showcase

### Beautiful Console Output
```
╭─────────────────────────────────────────────────────────╮
│ Discord Payment System                                  │
├─────────────────────────────────────────────────────────┤
│ Version:   1.0.0                                        │
│ Author:    Your Team                                    │
│ License:   MIT                                          │
│ Platform:  Discord.js v14                               │
╰─────────────────────────────────────────────────────────╯

📦 Features
  ├─ Payment Processing (PromptPay & TrueWallet)
  ├─ Stock Management System
  ├─ QR Code Generation
  ├─ Database Integration (MongoDB & Supabase)
  └─ Cloud Storage (AWS S3)
```

### OOP Architecture
```typescript
// Clean, maintainable code structure
export class PaymentCommand extends BaseCommand {
    public async execute(interaction: ChatInputCommandInteraction) {
        // Type-safe implementation
    }
}
```

## 🔐 Security

- Environment variables for sensitive data
- Input validation on all commands
- Rate limiting to prevent abuse
- Secure database connections
- Error handling and logging

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Discord.js community
- TypeScript team
- All contributors

## 📞 Support

- Discord Server: [Join Here](https://discord.gg/yourserver)
- Issues: [GitHub Issues](https://github.com/yourusername/dt-payments/issues)
- Email: support@yourdomain.com

---

<div align="center">

Made with ❤️ by Your Team

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/yourserver)

</div>

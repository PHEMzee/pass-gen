# 🔐 Password Generator

A modern, user-friendly web application for generating secure, customizable passwords with support for uppercase letters, lowercase letters, numbers, and special characters.

## ✨ Features

- **Customizable Password Length**: Adjust password length from 8 to 24 characters in 4-character increments
- **Character Options**: Choose which character types to include:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!, *, &, ?, -, etc.)
- **Strong Password Validation**: Ensures generated passwords meet minimum requirements:
  - Minimum 2 uppercase letters
  - Minimum 2 lowercase letters
  - Minimum 2 numbers
  - Minimum 2 special characters
- **One-Click Copy**: Copy generated passwords to clipboard with the copy button
- **Material Design UI**: Clean, modern interface with responsive design
- **Real-time Updates**: Instant feedback as you adjust settings

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PHEMzee/pass-gen.git
cd pass-gen
```

2. Install dependencies:
```bash
npm install
```

3. Open `password.html` in your browser or serve it with a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 📋 How to Use

1. **Select Character Types**: Check the boxes for the character types you want in your password:
   - Upper-case (A-Z)
   - Lower-case (a-z)
   - Characters (!, *, &)
   - Numbers (0-9)

2. **Set Password Length**: Use the + and - buttons to adjust the password length:
   - Minimum: 8 characters
   - Maximum: 24 characters
   - Increments: 4 characters

3. **Generate Password**: Click the "Generate" button to create a new secure password

4. **Copy to Clipboard**: Click the 📋 button to copy the generated password

## 🏗️ Project Structure

```
pass-gen/
├── password.html      # Main HTML file
├── index.js          # JavaScript logic for password generation
├── styles.css        # Material Design styling
├── bundle.js         # Bundled JavaScript (generated)
├── package.json      # Project dependencies
└── README.md         # This file
```

## 📦 Dependencies

- **password-generator** (^2.3.2): Core password generation library
- **clipboardy** (^4.0.0): Cross-platform clipboard access
- **clipboard-copy** (^4.0.1): Clipboard copy utility
- **secure-password-gen** (^1.0.8): Additional secure password generation

## 🎨 UI/UX Highlights

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Material Design**: Follows Material Design principles with custom theming
- **Accessibility**: Clear labels and intuitive controls
- **Visual Feedback**: Hover effects and smooth transitions on buttons
- **Dark Neutral Colors**: Easy on the eyes with a professional appearance

## 🔒 Security

The password generator ensures strong passwords by:
- Validating that generated passwords meet complexity requirements
- Using cryptographically sound generation methods
- Checking for repeated characters
- Enforcing minimum character counts per type

## ⚙️ Technical Details

### Password Validation Rules

```javascript
- Minimum length: 8 characters
- Uppercase letters minimum: 2
- Lowercase letters minimum: 2
- Numbers minimum: 2
- Special characters minimum: 2
- No repeating characters (3+ in a row)
```

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 👤 Author

Created by **moreHOPE** / **PHEMzee**

## 🐛 Known Issues & Future Improvements

- [ ] Add password strength indicator
- [ ] Add password history
- [ ] Add custom character set input
- [ ] Add password requirements customization
- [ ] Add unit tests
- [ ] Improve special character set options

## 📞 Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

---

**Stay Secure! 🔐**

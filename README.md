# SwiftTranslator – Playwright Automation Testing Project

## 📌 Student Information
- **Student Name**   : Dissanayaka P.G.J.S
- **Student Number** : IT23191310
- **Course / Module**: IT3040

---

## 📘 Project Overview

This repository contains an automated testing project developed using **Playwright** to test the **SwiftTranslator** web application.

The purpose of this assignment is to:
- Automate **Positive Functional Test Cases**
- Automate **Negative Functional Test Cases**
- Automate **UI-related Test Case(s)**
- Validate Singlish → Sinhala transliteration behavior
- Demonstrate correct Playwright project structure, execution, and reporting

---

## 🌐 Application Under Test (AUT)

- **Application Name**: SwiftTranslator  
- **Application URL**: https://www.swifttranslator.com/  
- **Functionality Tested**: Real-time Singlish to Sinhala translation

---

## 🧪 Test Coverage

### ✅ Positive Functional Test Cases
- Valid Singlish sentences
- Daily conversation phrases
- Mixed English and Sinhala words
- Numbers, dates, punctuation, emojis

### ❌ Negative Functional Test Cases
- Incorrect or invalid Singlish input
- Joined words without spaces
- Random symbols and slang
- Spelling mistakes and edge cases

### 🖥 UI Test Case
- Clearing input clears Sinhala output immediately
- Real-time output update behavior

---

## 📁 Project Folder Structure

```text
playwright-Test-Case-for-swifttranslator-IT23191310/
│
├── test cases/
│   └── IT23191310_Test_cases.xlsx   # Test cases result file
│
├── tests/
│   └── positive.spec.js             # Sinhala translator test cases
│
├── playwright.config.js             # Playwright configuration file
├── package.json                     # Project dependencies and scripts
├── package-lock.json                # Dependency lock file
├── README.md                        # Project documentation
└── .gitignore
```

## ⚙️ Technologies Used

- **Node.js**
- **Playwright Test Framework**
- **JavaScript**
- **Chromium Browser**

---

## 🛠 Prerequisites

Ensure the following are installed before running the tests:

- Node.js (v16 or higher)  
https://nodejs.org/
- Git  
https://git-scm.com/

---

## 📦 Installation Steps

1. Clone the public GitHub repository:
 ```bash
   git clone https://github.com/Janith303/Playwright-Test-Case-fro-swifttranslator_IT23191310.git
```
2.Navigate into the project folder:
 ```bash
cd playwright-Test_Case-for-swifttranslator-IT23191310
```
3.Install dependencies:
```bash
npm install
```
4.Install Playwright browsers:
```bash
npx playwright install
```

## ▶️ How to Execute Tests

1.Run all Playwright tests:
```bash
npx playwright test
```
2.Run tests with UI test:
```bash
npx playwright test --ui
```
3.View test report:
```bash
npx playwright show-report
```




# Personal Profile Website

An elegant, responsive, and fully testable **personal portfolio project** built with **HTML**, **CSS**, and **JavaScript** — showcasing a profile card, an interactive “About Me” page, and a functional contact form integrated with **Formspree**.

---

## Overview

This project demonstrates a clean, semantic, and accessible multi-page UI designed for both **real-world usability** and **automated testing**. Each visible element includes a `data-testid` attribute, making it ready for frameworks like **Cypress**, **Playwright**, or **Jest**.

 It focuses on structure, responsiveness, and simplicity — proving that beautiful design doesn’t need a framework.

---

##  Features

-  **Modern, Minimal UI** with a consistent color palette
-  **Fully Responsive** — works across mobile, tablet, and desktop
- ♿ **Accessible HTML** structure and ARIA support
-  **Testing-Ready** with `data-testid` attributes on key elements
-  **Interactive JS Components**
    - Live system time (milliseconds)
    - Editable avatar with `localStorage` persistence
    - Animated stats counters
    - “Note to Future Self” with save & clear functionality
    - Contact form validation and Formspree email integration

---

##  Pages

| Page | Description | Key Test IDs |
|------|-------------|--------------|
| **Profile** | Displays user avatar, name, time, and social links | `test-user-avatar`, `test-user-time` |
| **About Me** | Reflective page with bio, goals, low-confidence areas, and notes | `test-about-bio`, `test-about-goals`, `test-about-confidence`, `test-about-future-note`, `test-about-extra` |
| **Contact** | Accessible contact form with validation and Formspree email support | `test-contact-name`, `test-contact-email`, `test-contact-subject`, `test-contact-message`, `test-contact-submit` |

---

##  Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, Grid, and responsive design
- **JavaScript (ES6+)** — DOM manipulation, localStorage, accessibility enhancements

---

##  Testing Support

Each interactive element includes a **`data-testid`** attribute to simplify automation testing.

**Example:**
```html
<img data-testid="test-user-avatar" src="images/avatar.png" alt="User Avatar" />
```

These identifiers ensure consistent element targeting for tools like Cypress, Playwright, or Jest + Testing Library.

---

##  Contact Form Integration

The contact form uses **Formspree** to send real messages directly to your inbox.

### Form Example:

```html
<form action="[https://formspree.io/f/mjkadear](https://formspree.io/f/mjkadear)" method="POST">

</form>
```
Getting Started
1. Clone the repository
git clone [https://github.com/DevBytes-J/profile-card-ui.git](https://github.com/DevBytes-J/profile-card-ui.git)

2.Navigate to the project
cd profile-card-ui

3. Open locally Just open index.html in your browser — no server or build tools needed!


It looks like you want to integrate the remaining sections of your project description into a clean, standard Markdown format for a README file.

Here is the combined, copy-and-paste ready text for the rest of the document, starting with the explanation of the data-testid attributes:

Markdown

These identifiers ensure consistent element targeting for tools like Cypress, Playwright, or Jest + Testing Library.

---

##  Contact Form Integration

The contact form uses **Formspree** to send real messages directly to your inbox.

### Form Example:

```html
<form action="[https://formspree.io/f/mjkadear](https://formspree.io/f/mjkadear)" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
Includes validation, accessibility labels, and a success feedback message on valid submission.

 Getting Started
Clone the repository

Bash

git clone [https://github.com/DevBytes-J/profile-card-ui.git](https://github.com/DevBytes-J/profile-card-ui.git)
Navigate to the project

Bash

cd profile-card-ui
Open locally Just open index.html in your browser — no server or build tools needed!

 Author
Joanna Bassey Frontend Developer passionate about clean UI, accessibility, and meaningful interactions.

“Build interfaces that look good and feel even better.”

 joannabassey19@gmail.com
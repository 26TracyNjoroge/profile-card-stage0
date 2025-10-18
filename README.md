# HNG Stage 0 - Profile Card Component
A responsive and accessible profile card component built with HTML, CSS, and vanilla JavaScript for HNG13 Internship Stage 0.

### Links

- GitHub Repository: [Repository](https://github.com/26TracyNjoroge/profile-card-stage0)
- Live Site URL: [Live Demo](https://profile-card-two-pearl.vercel.app/)

## Features

- **Dynamic Time Display**: Real-time milliseconds counter using requestAnimationFrame for accurate updates.
- **Avatar Upload**: Upload custom avatar images or use a default URL.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Semantic HTML**: Uses proper HTML5 semantic elements for better accessibility.
- **Accessible**: Includes alt text, ARIA labels, keyboard navigation, and focus styles.
- **Social Links**:Connected to GitHub, LinkedIn, and Twitter profiles.

## Project Structure
```
profile-card-stage0/
├── index.html          
├── css/
│   └── styles.css      
├── src/
│   └── app.js         
├── assets/
│   ├── images/
│   │   └── avatar.jpg 
│   └── fonts/
│       ├── manrope-v20-latin-500.woff2
│       └── manrope-v20-latin-700.woff2
├── screenshots/ 
|       ├── desktop-screenshot.png
|       ├── mobile1-screenshot.png
│       └── mobile2-screenshot.png
└── README.md           
```

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript
- Font Awesome 
- Manrope Font


## How to Run Locally
1. Clone the repository
```bash
   git clone git@github.com:26TracyNjoroge/profile-card-stage0.git
```
2. Open `index.html` in your browser

## Testing & Validation

### Data-testid Attributes

All required `data-testid` attributes are present:

- `test-profile-card`
- `test-user-avatar`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-social-links`
- `test-user-social-github`
- `test-user-social-linkedin`
- `test-user-social-x`
- `test-user-hobbies`
- `test-user-dislikes`

### Manual Testing Checklist

- **Page Load:** Avatar displays with default image on initial load  
- **Avatar Upload:** Can click avatar and upload new image; displays immediately  
- **Time Display:** Milliseconds update continuously and match Date.now()  
- **Social Links:** All links open in new tabs
- **Responsive Layout:** Layout adapts correctly at mobile, tablet, and desktop breakpoints  
- **Keyboard Navigation:** All interactive elements are keyboard-focusable (Tab key)  
- **Focus Styles:** Visible outline appears when focused on interactive elements  
- **Hover Effects:** Avatar scaling and hover text (“Click to change avatar”) work  
- **Alt Text:** Avatar has descriptive alt attribute  
- **Accessibility:** Page works with screen readers; semantic markup present  

## Screenshots
![Desktop View](screenshots/desktop-screenshot.png)

## Author

**Tracy Njoroge** — [GitHub](https://github.com/26TracyNjoroge) | [LinkedIn](https://www.linkedin.com/in/tracynjoroge/) | [Twitter](https://x.com/TracyNjoro90134)

---

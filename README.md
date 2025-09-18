# 🏢 Business Management System

**Full-stack** business management system with modern UI and secure backend authentication.

## ✨ Features

### 🎯 Core Functionality
- **User Authentication**: Session-based login with Remember-Me functionality
- **Dynamic Page Loading**: Fetch-based page system with caching
- **Smart Memory Management**: LRU cache with automatic cleanup (max 10 pages)
- **Tab Management**: Multiple tabs with horizontal scrolling support
- **Responsive Design**: Mobile-first approach with collapsible sidebar

### 🔧 Technical Features
- **Backend Security**: Spring Security 6 with BCrypt password encryption
- **Database Integration**: MySQL with MyBatis ORM
- **Session Management**: Persistent sessions with Remember-Me cookies
- **Script & Style Support**: Dynamic execution of page-specific scripts and styles
- **Resource Cleanup**: Automatic cleanup on tab close to prevent memory leaks
- **Real-time Monitoring**: Memory usage display in header
- **Accordion Menus**: Expandable/collapsible navigation with global controls

### 📱 User Experience
- **Professional Login**: Secure authentication with elegant UI
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS transitions and scroll animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized loading with smart caching

## 🛠️ Technology Stack

### Frontend
- **Framework**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Boxicons
- **Notifications**: SweetAlert2
- **Module System**: Dynamic ES6 imports

### Backend
- **Framework**: Spring Boot 3.2.0
- **Security**: Spring Security 6
- **Database**: MySQL 8.0
- **ORM**: MyBatis
- **Build Tool**: Gradle 8.5
- **Java Version**: 17+

## 📁 Project Structure

```
├── README.md               # Project documentation
├── backend/                # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/worksystem/
│   │   │   │       ├── config/         # Spring Security config
│   │   │   │       ├── controller/     # REST controllers
│   │   │   │       ├── model/          # Entity models
│   │   │   │       ├── mapper/         # MyBatis mappers
│   │   │   │       └── service/        # Business logic
│   │   │   └── resources/
│   │   │       ├── static/             # Frontend assets
│   │   │       │   ├── index.html      # Main application
│   │   │       │   ├── login.html      # Login page
│   │   │       │   ├── script.js       # Core app logic
│   │   │       │   ├── js/             # JavaScript modules
│   │   │       │   └── pages/          # Dynamic pages
│   │   │       ├── mybatis/mapper/     # SQL mappers
│   │   │       └── application.yml     # App configuration
│   └── build.gradle        # Gradle build script
├── index.html              # Frontend-only version
├── script.js               # Standalone frontend logic
└── pages/                  # Static page components
    ├── dashboard.html      # Dashboard with statistics
    ├── projects.html       # Project management
    ├── tasks.html          # Task board
│   ├── task-timeline.html  # Timeline view
│   ├── task-my.html        # Personal tasks
│   ├── reports.html        # Reports and analytics
│   └── settings.html       # Application settings
└── README.md               # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Java 17+** (for backend)
- **MySQL 8.0+** (for database)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### Installation

#### Option 1: Full-Stack (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/pkoksh/ui-template.git
   cd ui-template
   ```

2. **Setup Database**
   ```sql
   -- Create database
   CREATE DATABASE worksystem CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   
   -- Create user (optional)
   CREATE USER 'worksystem'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON worksystem.* TO 'worksystem'@'localhost';
   ```

3. **Configure Database Connection**
   ```bash
   cd backend/src/main/resources
   # Edit application.yml with your database settings
   ```

4. **Run the Application**
   ```bash
   cd backend
   ./gradlew bootRun
   ```

5. **Access the Application**
   ```
   http://localhost:8080
   ```

6. **Login with Test Accounts**
   - **Admin**: `admin` / `admin123`
   - **User**: `user1` / `user123`
   - **Manager**: `manager` / `manager123`

#### Option 2: Frontend Only

1. **Use the standalone files**
   ```bash
   # Start a local server in the root directory
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🔧 Configuration

### Database Configuration (backend/src/main/resources/application.yml)
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/worksystem
    username: your_username
    password: your_password
    driver-class-name: com.mysql.cj.jdbc.Driver
```

### Build Configuration (backend/build.gradle)
```gradle
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}
```

## 💡 Key Features Explained

### Dynamic Page Loading
- Pages are loaded asynchronously using the Fetch API
- Scripts and styles are extracted and executed dynamically
- Smart caching prevents unnecessary network requests

### LRU Cache Management
- Maximum 10 pages cached in memory
- Least recently used pages are automatically removed
- Open tabs are protected from cache cleanup
- Real-time memory usage monitoring

### Tab Scrolling System
- Horizontal scrolling for many open tabs
- Smooth scroll animations
- Mouse wheel support
- Auto-scroll to active tab

### Resource Management
- Automatic cleanup of page-specific scripts and styles
- Memory leak prevention
- Configurable cache size
- Debug tools for monitoring

## 🎮 Usage

### Navigation
- **Sidebar**: Click menu items to open pages
- **Tabs**: Switch between open pages
- **Mobile**: Use hamburger menu on small screens

### Tab Management
- **Open**: Click any menu item
- **Close**: Click × on tab (protects last tab)
- **Scroll**: Use scroll buttons or mouse wheel

### Memory Management
- **Monitor**: Check cache status in header
- **Clean**: Click "정리" button to clear unused cache
- **Configure**: Use `debugCache.setMaxCache(size)` in console

### Developer Tools
Open browser console and use:
```javascript
// Check cache status
debugCache.status()

// List cached pages
debugCache.list()

// Clear all cache
debugCache.clear()

// Remove specific page
debugCache.remove('projects')

// Set cache limit
debugCache.setMaxCache(15)
```

## 🎨 Customization

### Adding New Pages
1. Create HTML file in `pages/` directory
2. Add entry to `menuItems` object in `script.js`
3. Add menu item to sidebar in `index.html`

### Styling
- Modify Tailwind classes directly in HTML
- Add custom CSS in `<style>` tags
- Use Tailwind configuration for theme changes

### Configuration
- `MAX_CACHED_PAGES`: Maximum cache size
- `TAB_SCROLL_AMOUNT`: Scroll distance per click
- CDN links for external libraries

## 🔧 Advanced Features

### Page-Specific Scripts
```html
<!-- In any page file -->
<script>
// Page-specific JavaScript
(function() {
    console.log('Page loaded');
    
    // Register cleanup function
    window.pageCleanup = window.pageCleanup || {};
    window.pageCleanup.pageName = function() {
        // Cleanup code here
    };
})();
</script>
```

### Custom Styles
```html
<!-- In any page file -->
<style>
.custom-animation {
    transition: all 0.3s ease;
}
</style>
```

## 📊 Performance

- **Initial Load**: ~50KB (minified)
- **Page Load**: ~2-5KB per page
- **Memory Usage**: Scales with cache size
- **Mobile Performance**: Optimized for 3G networks

## 🌟 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Dark mode support
- [ ] Drag & drop tab reordering
- [ ] Bookmark/favorite pages
- [ ] Search functionality
- [ ] Offline support with Service Workers
- [ ] TypeScript migration
- [ ] Component-based architecture

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Check existing documentation
- Review console debug tools

---

**Built with ❤️ using modern web technologies**
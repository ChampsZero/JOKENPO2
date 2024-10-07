function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    const searchButton = document.querySelector('button');
    const menuToggle = document.querySelector('.menu-toggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        searchButton.style.backgroundColor = '#ffffff';
        searchButton.style.color = '#000000';
        menuToggle.style.backgroundColor = '#ffffff';
        menuToggle.style.color = '#000000';
        document.querySelector('.audio-toggle').style.backgroundColor = '#ffffff';
        document.querySelector('.audio-toggle').style.color = '#000000';
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        searchButton.style.backgroundColor = '#000000';
        searchButton.style.color = '#ffffff';
        menuToggle.style.backgroundColor = '#000000';
        menuToggle.style.color = '#ffffff';
        document.querySelector('.audio-toggle').style.backgroundColor = '#000000';
        document.querySelector('.audio-toggle').style.color = '#ffffff';
    }
}
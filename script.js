const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main, section');

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // Удаляем класс "active" со всех вкладок и секций
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Добавляем класс "active" к выбранной вкладке и секции
        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);
        link.classList.add('active');
        targetSection.classList.add('active');
      });
    });

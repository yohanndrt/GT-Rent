// Afficher le sous-menu au survol de l'élément "Nos voitures"
document.querySelector('nav ul li').addEventListener('mouseover', function() {
    document.querySelector('.sous-menu').style.display = 'block';
});

// Cacher le sous-menu lorsque la souris quitte l'élément "Nos voitures"
document.querySelector('nav ul li').addEventListener('mouseleave', function() {
    document.querySelector('.sous-menu').style.display = 'none';
});
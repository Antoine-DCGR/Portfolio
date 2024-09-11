function showCategory(category) {
  // Cacher toutes les catégories
  document.getElementById('scolaire').classList.remove('active');
  document.getElementById('personnel').classList.remove('active');
  
  // Afficher la catégorie sélectionnée
  document.getElementById(category).classList.add('active');
}

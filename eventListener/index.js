const grandfather = document.querySelector('#grandfather'),
  father = document.querySelector('#father'),
  childern = document.querySelectorAll('.child');

grandfather.addEventListener('click', function(e) {
  console.log(`grandfather id: ${this.id} targetId: ${e.target.id}`);
});

father.addEventListener('click', function(e) {
  console.log(`father id: ${this.id} targetId: ${e.target.id}`);
  // 阻止事件传播
  e.stopPropagation();
});

// if (childern && childern.length) {
//   for (const child of childern) {
//     child.addEventListener('click', function(e) {
//       console.log(`child id: ${this.id} targetId: ${e.target.id}`);
//     });
//   }
// }

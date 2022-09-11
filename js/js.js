class Producto {
    constructor (nombre, precio, año){
        this.nombre = nombre; 
        this.precio = precio; 
        this.año = año; 

    }

}

class IdU {
    addProducto (producto){
       const productoList =  document.getElementById('producto-lista');
       const elemento = document.createElement('table'); 
       elemento.innerHTML = `
       <table class="table table-bordered border-primary">
           <thead >
           <tr>
              <th> Nombre </th> 
              <th> Precio </th>
              <th> Año </th> 
              <th> Acción </th>
            </tr> 
            <tr>
              <td>${producto.nombre}</td>
               <td>${producto.precio}</td>
              <td>${producto.año}</td>
              <td> <a href="#" class= "btn btn-danger" name="delete">Borrar</a>
              </td> 
              </tr> 
              </thead>
       </table>
       `;
       productoList.appendChild(elemento); 
     

    }
    deleteProducto(elemento){
        if(elemento.name === 'delete'){
            elemento.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto eliminado', 'danger')
        }


    }
    mostrarMensaje (mensaje, cssClass){
       const div = document.createElement('div'); 
       div.className = `alert alert-${cssClass} mt-4`; 
       div.appendChild(document.createTextNode(mensaje)); 
       const container = document.querySelector('.container'); 
       const app = document.querySelector('#app'); 
       container.insertBefore(div, app);
       setTimeout(function(){
        document.querySelector('.alert').remove(); 
       }, 1500); 


    }
    resetForm(){
        document.getElementById('producto-form').reset();
    }

}


document.getElementById('producto-form').addEventListener('submit', function (e){
   const nombre = document.getElementById('name').value; 
   const precio = document.getElementById('precio').value;
   const año = document.getElementById('año').value;  
   const producto=  new Producto(nombre,precio,año); 
   const idu = new IdU(); 
   if(nombre === '' || precio==='' || año === ''){
    return idu.mostrarMensaje('Completa correctamente', 'danger'); 
   }
   idu.addProducto(producto); 
   idu.resetForm(); 
   idu.mostrarMensaje('Producto agregado', 'success')
   e.preventDefault();
}); 

document.getElementById('producto-lista').addEventListener('click',function (e){
    const idu = new IdU(); 
    idu.deleteProducto(e.target); 
})
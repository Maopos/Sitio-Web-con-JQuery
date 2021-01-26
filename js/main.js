
    $(document).ready(function(){

        //slider
      $('.slider').bxSlider({
          mode: 'fade',
          captions: true, //Subtitutlo debajo de la foto
          slideWidth: 1200 //https://bxslider.com/options/
          
      });

      

      //Post

      var posts = [
          {
              title: 'Titulo articulo 1',
              date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format('MMMM, YYYY.'),
              content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rem optio necessitatibus blanditiis facilis, vitae sit iste earum quaerat explicabo sint vel, odio porro autem alias nostrum numquam ipsam magni. Mollitia maxime optio ea atque necessitatibus quo beatae officia? Illo vero unde, reiciendis error excepturi, beatae assumenda iure dignissimos tempore non doloribus quibusdam ipsam, necessitatibus fuga earum ad consequuntur nesciunt soluta libero.'
          },
          {
            title: 'Titulo articulo 2',
            date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format('MMMM, YYYY.'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rem optio necessitatibus blanditiis facilis, vitae sit iste earum quaerat explicabo sint vel, odio porro autem alias nostrum numquam ipsam magni. Mollitia maxime optio ea atque necessitatibus quo beatae officia? Illo vero unde, reiciendis error excepturi, beatae assumenda iure dignissimos tempore non doloribus quibusdam ipsam, necessitatibus fuga earum ad consequuntur nesciunt soluta libero.'
          },
          {
            title: 'Titulo articulo 3',
            date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format('MMMM, YYYY.'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rem optio necessitatibus blanditiis facilis, vitae sit iste earum quaerat explicabo sint vel, odio porro autem alias nostrum numquam ipsam magni. Mollitia maxime optio ea atque necessitatibus quo beatae officia? Illo vero unde, reiciendis error excepturi, beatae assumenda iure dignissimos tempore non doloribus quibusdam ipsam, necessitatibus fuga earum ad consequuntur nesciunt soluta libero.'
          },
          {
            title: 'Titulo articulo 4',
            date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format('MMMM, YYYY.'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rem optio necessitatibus blanditiis facilis, vitae sit iste earum quaerat explicabo sint vel, odio porro autem alias nostrum numquam ipsam magni. Mollitia maxime optio ea atque necessitatibus quo beatae officia? Illo vero unde, reiciendis error excepturi, beatae assumenda iure dignissimos tempore non doloribus quibusdam ipsam, necessitatibus fuga earum ad consequuntur nesciunt soluta libero.'
          },
          {
            title: 'Titulo articulo 5',
            date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format('MMMM, YYYY.'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus rem optio necessitatibus blanditiis facilis, vitae sit iste earum quaerat explicabo sint vel, odio porro autem alias nostrum numquam ipsam magni. Mollitia maxime optio ea atque necessitatibus quo beatae officia? Illo vero unde, reiciendis error excepturi, beatae assumenda iure dignissimos tempore non doloribus quibusdam ipsam, necessitatibus fuga earum ad consequuntur nesciunt soluta libero.'
          }
          
      ];

      posts.forEach((item, index) => {
          var post = `
                            <article class="post">
                                <h2>${item.title}</h2>
                                <p id="fecha">${item.date}</p>
                                <p>${item.content}</p>
                                <a href="#" class="leer_mas">Leer mas...</a>
                                <br><br>
                                    <hr>
                            </article> 
          `;

          $('#articulos').append(post);
      });


      
      
      
      // Scroll pagina arriba

      $('#subir').click(function (e) {

        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0,
        }, 1000);

        return false;
      })

      // Login con local storage

      $('#login form').submit(function () {
        var name = $('#name').val();
        localStorage.setItem('user_name', name);
      });

      var name = localStorage.getItem('user_name');

      if (name != null && name != 'undefined') {

        var bienvenida = $('#bienvenido');

        bienvenida.html('Bienvenido, ' + name + '. <br><br>'); 

        bienvenida.append('<a href="#" id="logout">Salir</a>')

        $('#login').hide(); // Ocultar form        

      }

      $('#logout').click(function () {
        localStorage.clear();
        location.reload();
        });

    });
  

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


      // Selector de Dark Theme

      var tema = $('#dark');

      $('#temaL').click(function () {

        tema.removeAttr('href')     

      })   
      
      $('#temaD').click(function () {

        tema.attr('href', 'dark.css')     

      })  
      
      
      // Scroll pagina arriba

      $('#subir').click(function (e) {

        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0,
        }, 1000);

        return false;
      })

    });
  
  (function(){
    var jdurl = 'http://localhost:3000/jdapi';
    $.ajax({
      type: 'get',
      async: false,
      url: jdurl,
      cache: false,
      dataType: 'jsonp',
      success: function(json){
        console.log(json);
        var html='';
        $('#js_climit_li').html('');
        $(json.categories).each(function(i,categories){
          html+='<li class="appliance js_toggle relative first"><div class="category-info list-nz"><h3 class="category-name b-category-name"><i></i><a id="s-category-'+categories.categoryID+'" href="#" target="_blank" class="ml-22" title="'+categories.categoryName+'">'+categories.categoryName+'</a></h3>';
          html+='<p class="c-category-list limit-24">';
          $(categories.categoryItems).each(function(i,categoryItems){
            html+='<a href="#" target="_blank" title="'+categoryItems.cname+'" id="s-goods-category-'+categoryItems.cid+'">'+categoryItems.cname+'</a>';
          });
          html+='</p><em>&gt;</em></div></li>'
        });
        console.log(html);
        $('#js_climit_li').html(html);
      },
      error: function(e){
        alert(error);
      }
    })
  })()
$(function() { var data = [ 
{ 
    id: 1, 
    name: 'Joshs Pizza Shop', 
    address: '11504 W North Ave, WI, 53222', 
    phone: '(414)342-7272' 
},
 { 
     id: 2, 
     name: 'Joshs Pizza Shop', 
     address: '7520 West Greenfield Avenue, WI, 52315',
     phone: '(414)342-7272' 
}, 
{
    id: 3, 
    name: 'Joshs Pizza Shop',  
    address: '1611 West Wells Street, WI, 62145',
    phone: '(414)342-7272' 
},
 { 
    id: 4, 
    name: 'Joshs Pizza Shop',  
    address: '1611 West Wells Street, OH, 43590',
    phone: '(414)342-7272'
  }];

var $locationC = $('#location-container'); 
var $TabsC = $('#tabs-container'); 


function initPosts() { for (let i = 0; i < data.length; i++) { 


    var postId = 'location-' + data[i].id, 
        $post = $('<section class="location-post"></section>'),
        $name = $('<h2 class="name"></h2>'), 
        $address = $('<blockquote></blockquote>'),
        $phone = $('<span class="phone"></span>');

    $name.text(data[i].name); 
    $address.text(data[i].address);
    $phone.text (data[i].phone); 


    $post.attr('id', postId); 
    $post.append($name); 
    $post.append($address); 
    $post.append($phone); 


    $locationC.append($post);
     
  }
}


initPosts(); 
initTabs(); 

}); 
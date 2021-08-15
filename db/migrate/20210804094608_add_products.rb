class AddProducts < ActiveRecord::Migration[6.1]
  def change
    Product.create ({
        :title => 'Hawaiian',
        :description => 'This is Hawaiian pizza',
        :price => 350,
        :size => 30,
        :is_spicy => false,
        :is_veg => false,
        :is_best_offer => false,
        :path_to_image => '/images/hawaiian.jpg'
    })
  
    Product.create ({
        :title => 'Pepperoni',
        :description => 'Nice Pepperoni pizza',
        :price => 450,
        :size => 30,
        :is_spicy => false,
        :is_veg => false,
        :is_best_offer => true,
        :path_to_image => '/images/pepperoni.jpg'
    })
    
    Product.create ({:title => 'Vegetarian',
       :description => 'Amazing Vegetarian pizza',
       :price => 400,
       :size => 30,
       :is_spicy => false,
       :is_veg => true,
       :is_best_offer => false,
       :path_to_image => '/images/veg.jpg'
   })
   
   Product.create ({:title => 'Neapolitan',
    :description => 'Neapolitan is a traditional pizza',
    :price => 370,
    :size => 30,
    :is_spicy => false,
    :is_veg => true,
    :is_best_offer => false,
    :path_to_image => '/images/neapolitan.jpg'
    })

    Product.create ({:title => 'New York-Style Pizza',
      :description => 'Boasting a thin, foldable base with cheese',
      :price => 300,
      :size => 30,
      :is_spicy => false,
      :is_veg => true,
      :is_best_offer => false,
      :path_to_image => '/images/ny_style.jpg'
   })

   Product.create ({:title => 'Chicago/Deep-Dish Pizza',
    :description => 'This style of pizza is banked in a pan',
    :price => 390,
    :size => 30,
    :is_spicy => false,
    :is_veg => true,
    :is_best_offer => false,
    :path_to_image => '/images/chicago.jpg'
   })
   
   Product.create ({:title => 'Sicillian',
    :description => 'Hot Sicillian pizza',
    :price => 420,
    :size => 30,
    :is_spicy => false,
    :is_veg => true,
    :is_best_offer => false,
    :path_to_image => '/images/sicillian.jpg'
   })

   Product.create ({:title => 'Californian',
    :description => 'Very tasty Californian pizza',
    :price => 320,
    :size => 30,
    :is_spicy => false,
    :is_veg => true,
    :is_best_offer => false,
    :path_to_image => '/images/california.jpg'
   })
  end
end

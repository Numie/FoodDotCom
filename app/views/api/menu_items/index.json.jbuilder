@menu_items.each do |menu_item|
  json.set! menu_item.id do
    json.merge! menu_item.attributes
    json.set! :item_option_sections do
      menu_item.item_option_sections.each do |item_option_section|
        json.set! item_option_section.id do
          json.merge! item_option_section.attributes
        end
      end
    end
  end
end

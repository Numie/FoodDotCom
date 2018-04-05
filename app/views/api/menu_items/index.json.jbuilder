@menu_items.each do |menu_item|
  json.set! menu_item.id do
    json.merge! menu_item.attributes

    json.set! :item_option_sections do
      json.array! menu_item.item_option_sections do |item_option_section|
        json.merge! item_option_section.attributes

        json.set! :item_options do
          json.array! item_option_section.item_options do |item_option|
            json.merge! item_option.attributes
          end
        end

      end
    end

  end
end

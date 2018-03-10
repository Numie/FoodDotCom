@menu_items.each do |menu_item|
  json.set! menu_item.id do
    json.merge! menu_item.attributes
  end
end

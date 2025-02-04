module SidebarHelper 
  def link_active?(link_name)
    if controller_name == link_name
      "bg-blue-700"
    else
      ""
    end
  end
end


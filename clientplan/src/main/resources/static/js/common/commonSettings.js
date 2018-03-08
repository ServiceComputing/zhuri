function modifySidebar ()
{
    var sidebarContent = 
        '<ul class="nav">\
            <li class="nav-item">\
                <a class="nav-link" href="/checkPlan">\
                    <i class="icon-speedometer"></i> Dashboard\
							<span class="badge badge-primary">NEW</span>\
                </a>\
            </li>\
            <li class="nav-title">\
                功能\
					</li>\
            <li class="nav-item">\
                <a href="/planModify" class="nav-link">\
                    <i class="icon-drop"></i>修改计划</a>\
            </li>\
        </ul>';
    $(".sidebar-nav").html(sidebarContent);
}

modifySidebar();
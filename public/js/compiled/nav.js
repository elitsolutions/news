!function(a){function t(a,t){return a.w('<div class="container-fluid"><div class="navbar-header"><h2 class="navbar-text pull-left visible-xs">Bölmələr</h2><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-menu" aria-expanded="false"><span class="sr-only"></span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="collapse-menu"><ul class="nav navbar-nav"><li><a href="" title="Ana səhifə">Ana səhifə</a></li>').s(t.get(["categories"],!1),t,{block:e},{}).w('</ul><form class="navbar-form navbar-left hidden-xs" role="search" action="etrafli-axtaris"><div class="form-group"><input type="text" class="form-control" name="search_word" placeholder="Axtar"></div></form></div></div>')}function e(a,t){return a.w("<li>").h("eq",t,{"else":l,block:s},{key:t.get(["different"],!1),value:"0"},"h").w("</li>")}function l(a,t){return a.w('<a href="').f(t.get(["url"],!1),t,"h").w('/" title="').f(t.get(["title"],!1),t,"h").w('"><img style="height:28px" src="/img/f1-logo.png"></a>')}function s(a,t){return a.w('<a href="').f(t.get(["url"],!1),t,"h").w('/" title="').f(t.get(["title"],!1),t,"h").w('">').f(t.get(["title"],!1),t,"h").w("</a>")}return a.register("tpl-nav.dust",t),t.__dustBody=!0,e.__dustBody=!0,l.__dustBody=!0,s.__dustBody=!0,t}(dust);
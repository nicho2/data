!function(e){var t=localStorage.getItem("election-email-popin-nb-display")?localStorage.getItem("election-email-popin-nb-display"):0,n=localStorage.getItem("election-email-popin-success"),o="/skin/projects/elections/election-nl-widget-dist/launcher.js";!0!==e.Conf.general.isMobile&&(o="/skin/projects/elections/election-nl-widget-dist/launcher-desktop.js");var i=_.throttle(function(){var e=document.scrollingElement||document.documentElement;e.scrollTop>40*e.offsetHeight/100&&(window.removeEventListener("scroll",i,!1),$.ajax({async:!0,url:o,cache:!0,success:function(e){}}))},500);-1!==document.cookie.indexOf("CONSENTMGR")&&t<3&&"/elections/resultats/alert"!==document.location.pathname&&!n&&(window.electionPopinActive=!0,window.addEventListener("scroll",i,!1))}(FTVi);
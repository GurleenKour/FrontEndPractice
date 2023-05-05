<!-- i have practiced responsiveness of web design -->
<!-- fixed moves the element in context of viewport and are taken out of documrnt flow and have z-index of zero -->
<!-- absolute takes the element out of document flow , in context of html , IF parent have a property (other than sticky) ,then , ele,ent moves in context of parent-->
<!-- relative moves in context of its previous position -->
<!-- sticky normally behaves as rerlatiive , but with distance applied it acts as sticky, once margin of viewport is it , and continue to act like the same until the content of parent finishes -->

<!-- for z-index the order is the document flow  order of siblings -->
<!-- backdrops ccan be created with position fixed but there is better approach() -->

<!-- VW VH VMIN( takes the values percent of width/height) -->
<!-- PROPERTY                       RECOMMENDED  -->
<!-- FONT SIZE(root element)       %  -->
<!-- FONT SIZE                     rem (em - children only)   -->
<!-- PADDING MARGIN BORDER          rem   px  rem    -->
<!-- WWIDTH HEIGHT                  % VW     % VH -->
<!--  TOP   BOTTOM                   %     %-->
<!--  LEFT RIGHT                     %     % -->
<!-- v max ,vmin image dont get too big/small  -->

<!-- TO QUICKLY CENTER ELEMRNTS      use auto ( margin auto only works with block level elements with expplicitly assigned width though.)-->

<!-- ********TO DO ********* -->
<!--  revise positioning and containing block -->
<!-- 100% height issue -->




<!-- IN RESPONSIVE DESIGN -->
<!-- 1) hardware and software pixels -> 
2) the viewport <meta> tag in HTML
3) media queries  : breakpoints 250 (40rem), 640 | code outside of media queries should be mobile first| 300-768 | 1000 -for really big screrns
-->
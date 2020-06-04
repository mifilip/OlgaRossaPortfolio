(function () {
    (function () {
        var logo, logo_css;
        logo = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>codepen-logo</title><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.139 21.651l1.35-1.35a.387.387 0 0 0 0-.54l-3.49-3.49a.387.387 0 0 0-.54 0l-1.35 1.35a.39.39 0 0 0 0 .54l3.49 3.49a.38.38 0 0 0 .54 0zm6.922.153l2.544-2.543a.722.722 0 0 0 0-1.018l-6.582-6.58a.722.722 0 0 0-1.018 0l-2.543 2.544a.719.719 0 0 0 0 1.018l6.58 6.579c.281.28.737.28 1.019 0zm14.779-5.85l-7.786-7.79a.554.554 0 0 0-.788 0l-5.235 5.23a.558.558 0 0 0 0 .789l7.79 7.789c.216.216.568.216.785 0l5.236-5.236a.566.566 0 0 0 0-.786l-.002.003zm-3.89 2.806a.813.813 0 1 1 0-1.626.813.813 0 0 1 0 1.626z" fill="#FFF" fill-rule="evenodd"/></svg>';
        logo_css = '.mM{display:block;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);position:fixed;bottom:1em;right:1em;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 240ms ease-in-out;transition:all 240ms ease-in-out;z-index:9999;opacity:0.75}.mM svg{display:block}.mM:hover{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125)}';
        document.head.insertAdjacentHTML('beforeend', '<style>' + logo_css + '</style>');
        // document.body.insertAdjacentHTML('beforeend', '<a href="https://codepen.io/mican/" target="_blank" class="mM">' + logo + '</a>');
    })();

    $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.find('figcaption').text() || item.el.attr('title');
            }
        },
        zoom: {
            enabled: true
        },
        // duration: 300
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            tCounter: ''
        },
        disableOn: function () {
            return $(window).width() > 640;
        }
    });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0QsUUFBQSxJQUFBLEVBQUE7SUFBQSxJQUFBLEdBQU87SUFDUCxRQUFBLEdBQVc7SUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLFNBQUEsR0FBWSxRQUFaLEdBQXVCLFVBQXJFO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBZCxDQUFpQyxXQUFqQyxFQUE4QyxpRUFBQSxHQUFvRSxJQUFwRSxHQUEyRSxNQUF6SDtFQUpDLENBQUEsQ0FBSCxDQUFBOztFQU1BLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsYUFBbkIsQ0FDRTtJQUFBLElBQUEsRUFBTSxPQUFOO0lBQ0EsbUJBQUEsRUFBcUIsSUFEckI7SUFFQSxjQUFBLEVBQWdCLEtBRmhCO0lBR0EsU0FBQSxFQUFXLDhCQUhYO0lBSUEsS0FBQSxFQUNFO01BQUEsV0FBQSxFQUFhLElBQWI7TUFDQSxRQUFBLEVBQVUsUUFBQSxDQUFDLElBQUQsQ0FBQTtlQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBUixDQUFhLFlBQWIsQ0FBMEIsQ0FBQyxJQUEzQixDQUFBLENBQUEsSUFBcUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFSLENBQWEsT0FBYjtNQUQ3QjtJQURWLENBTEY7SUFRQSxJQUFBLEVBQ0U7TUFBQSxPQUFBLEVBQVM7SUFBVCxDQVRGOztJQVdBLE9BQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxJQUFUO01BQ0Esa0JBQUEsRUFBb0IsS0FEcEI7TUFFQSxRQUFBLEVBQVU7SUFGVixDQVpGO0lBZUEsU0FBQSxFQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEtBQVYsQ0FBQSxDQUFBLEdBQW9CO0lBRFg7RUFmWCxDQURGO0FBTkEiLCJzb3VyY2VzQ29udGVudCI6WyJkbyAtPlxuICBsb2dvID0gJzxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+Y29kZXBlbi1sb2dvPC90aXRsZT48cGF0aCBkPVwiTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2ek03LjEzOSAyMS42NTFsMS4zNS0xLjM1YS4zODcuMzg3IDAgMCAwIDAtLjU0bC0zLjQ5LTMuNDlhLjM4Ny4zODcgMCAwIDAtLjU0IDBsLTEuMzUgMS4zNWEuMzkuMzkgMCAwIDAgMCAuNTRsMy40OSAzLjQ5YS4zOC4zOCAwIDAgMCAuNTQgMHptNi45MjIuMTUzbDIuNTQ0LTIuNTQzYS43MjIuNzIyIDAgMCAwIDAtMS4wMThsLTYuNTgyLTYuNThhLjcyMi43MjIgMCAwIDAtMS4wMTggMGwtMi41NDMgMi41NDRhLjcxOS43MTkgMCAwIDAgMCAxLjAxOGw2LjU4IDYuNTc5Yy4yODEuMjguNzM3LjI4IDEuMDE5IDB6bTE0Ljc3OS01Ljg1bC03Ljc4Ni03Ljc5YS41NTQuNTU0IDAgMCAwLS43ODggMGwtNS4yMzUgNS4yM2EuNTU4LjU1OCAwIDAgMCAwIC43ODlsNy43OSA3Ljc4OWMuMjE2LjIxNi41NjguMjE2Ljc4NSAwbDUuMjM2LTUuMjM2YS41NjYuNTY2IDAgMCAwIDAtLjc4NmwtLjAwMi4wMDN6bS0zLjg5IDIuODA2YS44MTMuODEzIDAgMSAxIDAtMS42MjYuODEzLjgxMyAwIDAgMSAwIDEuNjI2elwiIGZpbGw9XCIjRkZGXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG4gIGxvZ29fY3NzID0gJy5tTXtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToxZW07cmlnaHQ6MWVtOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3otaW5kZXg6OTk5OTtvcGFjaXR5OjAuNzV9Lm1NIHN2Z3tkaXNwbGF5OmJsb2NrfS5tTTpob3ZlcntvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xMjUpO3RyYW5zZm9ybTpzY2FsZSgxLjEyNSl9J1xuICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxzdHlsZT4nICsgbG9nb19jc3MgKyAnPC9zdHlsZT4nXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MICdiZWZvcmVlbmQnLCAnPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9taWNhbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm1NXCI+JyArIGxvZ28gKyAnPC9hPidcbiAgcmV0dXJuXG4kKCcuZ2FsbGVyeS1saW5rJykubWFnbmlmaWNQb3B1cFxuICB0eXBlOiAnaW1hZ2UnXG4gIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWVcbiAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlXG4gIG1haW5DbGFzczogJ21mcC13aXRoLXpvb20gbWZwLWltZy1tb2JpbGUnXG4gIGltYWdlOiBcbiAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxuICAgIHRpdGxlU3JjOiAoaXRlbSkgLT5cbiAgICAgIGl0ZW0uZWwuZmluZCgnZmlnY2FwdGlvbicpLnRleHQoKSB8fCBpdGVtLmVsLmF0dHIoJ3RpdGxlJylcbiAgem9vbTpcbiAgICBlbmFibGVkOiB0cnVlXG4gICAgIyBkdXJhdGlvbjogMzAwXG4gIGdhbGxlcnk6XG4gICAgZW5hYmxlZDogdHJ1ZVxuICAgIG5hdmlnYXRlQnlJbWdDbGljazogZmFsc2VcbiAgICB0Q291bnRlcjogJydcbiAgZGlzYWJsZU9uOiAtPlxuICAgICQod2luZG93KS53aWR0aCgpID4gNjQwICJdfQ==
//# sourceURL=coffeescript
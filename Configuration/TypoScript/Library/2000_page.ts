
# Default PAGE object:
page = PAGE

## Favicon
page.shortcutIcon = {$resDir}/Public/Icons/favicon.ico

## CSS Dateien laden
page.includeCSS {
	main = {$resDir}/Public/Css/main.css
	styles = {$resDir}/Public/Css/styles.css
}

## JavaScript laden
page.includeJSlibs {
}

page.includeJSFooterlibs {
	jquery = {$resDir}/Public/JavaScript/vendor/jquery-1.11.2.min.js
}

page.includeJSFooter {
	main = {$resDir}/Public/JavaScript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	partialRootPath = {$resDir}/Private/Partials
	layoutRootPath = {$resDir}/Private/Layouts

	variables {
		contentMain < styles.content.get
		contentAside < styles.content.get
		contentAside.select.where = colPos = 2
		contentAside.stdWrap {
			wrap = |
			required = 1
		}
		contentHeader < styles.content.get
		contentHeader.select.where = colPos = 1
		contentHeader.stdWrap {
			wrap = |
			required = 1
		}
	}

	#file = {$resDir}/Private/Templates/DefaultTemplate.html
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
	key.data = pagelayout

	# Default Template
	default = TEXT
	default.value = {$resDir}/Private/Templates/DefaultTemplate.html

	pagets__1 < .default

}

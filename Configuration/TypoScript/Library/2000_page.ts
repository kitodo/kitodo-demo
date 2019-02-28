
# Default PAGE object:
page = PAGE

## Favicon
page.shortcutIcon = EXT:presentation-package/Resources/Public/Icons/favicon.ico

## CSS Dateien laden
page.includeCSS {
	main = EXT:presentation-package/Resources/Public/Css/main.css
	styles = EXT:presentation-package/Resources/Public/Css/styles.css
}

## JavaScript laden
page.includeJSlibs {
}

page.includeJSFooterlibs {
	#jquery = EXT:presentation-package/Resources/Public/JavaScript/vendor/jquery-1.11.2.min.js
}

page.includeJSFooter {
	main = EXT:presentation-package/Resources/Public/JavaScript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	#partialRootPath = EXT:presentation-package/Resources/Private/Partials
	#layoutRootPath = EXT:presentation-package/Resources/Private/Layouts

	layoutRootPaths {
		10 = EXT:presentation-package/Resources/Private/Layouts
	}
	partialRootPaths {
		10 = EXT:presentation-package/Resources/Private/Partials
	}
	templateRootPaths {
		10 = EXT:presentation-package/Resources/Private/Templates
	}

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

	#file = EXT:presentation-package/Resources/Private/Templates/DefaultTemplate.html
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
	key.data = pagelayout

	# Default Template
	default = TEXT
	default.value = EXT:presentation-package/Resources/Private/Templates/DefaultTemplate.html

	pagets__1 < .default

}

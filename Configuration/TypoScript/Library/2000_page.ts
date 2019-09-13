
# Default PAGE object:
page = PAGE

## Favicon
page.shortcutIcon = {$resDir}/Resources/Public/Icons/favicon.ico

## CSS Dateien laden
page.includeCSS {
	main = {$resDir}/Resources/Public/Css/main.css
	styles = {$resDir}/Resources/Public/Css/styles.css
}

## JavaScript laden
page.includeJSlibs {
}

page.includeJSFooterlibs {
	#jquery = {$resDir}/Resources/Public/JavaScript/vendor/jquery-1.11.2.min.js
}

page.includeJSFooter {
	main = {$resDir}/Resources/Public/JavaScript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	#partialRootPath = {$resDir}/Resources/Private/Partials
	#layoutRootPath = {$resDir}/Resources/Private/Layouts

	layoutRootPaths {
		10 = {$resDir}/Resources/Private/Layouts
	}
	partialRootPaths {
		10 = {$resDir}/Resources/Private/Partials
	}
	templateRootPaths {
		10 = {$resDir}/Resources/Private/Templates
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

		contentTOC < styles.content.get
		contentTOC.select.where = colPos = 3
		contentTOC.stdWrap {
			wrap = |
			required = 1
		}

		contentMetadata < styles.content.get
		contentMetadata.select.where = colPos = 4
		contentMetadata.stdWrap {
			wrap = |
			required = 1
		}

		contentTools < styles.content.get
		contentTools.select.where = colPos = 5
		contentTools.stdWrap {
			wrap = |
			required = 1
		}

		contentNavigation < styles.content.get
		contentNavigation.select.where = colPos = 6
		contentNavigation.stdWrap {
			wrap = |
			required = 1
		}

		contentBasket < styles.content.get
		contentBasket.select.where = colPos = 7
		contentBasket.stdWrap {
			wrap = |
			required = 1
		}

		contentMetadataTitle < styles.content.get
		contentMetadataTitle.select.where = colPos = 8
		contentMetadataTitle.stdWrap {
			wrap = |
			required = 1
		}
	}


    ## Template file name must be the same as the ID / Name of the backendlayout
    ## Defined in Page.txt
    ## ID should alphnumerical
    templateName = TEXT
    templateName.stdWrap {
        cObject = TEXT
        cObject {
            data = levelfield:-2,backend_layout_next_level,slide
            override.field = backend_layout

            #required = 1

            split {
                token = pagets__
                cObjNum = 1
                1.current = 1
            }
        }

        ifEmpty  = Default

    }

}

# no unnecessary repetitions
# Directory has already been set
# Name of the template is defined in Page.txt as Key / ID
#page.10.file.stdWrap.cObject = CASE
#page.10.file.stdWrap.cObject {
#	key.data = pagelayout
#
#	# Default Template
#	default = TEXT
#	default.value = {$resDir}/Resources/Private/Templates/DefaultTemplate.html
#
#	pagets__1 < .default
#
#	detail = TEXT
#	detail.value = {$resDir}/Resources/Private/Templates/DetailTemplate.html
#
#	pagets__2 < .detail
#
#	onecol = TEXT
#	onecol.value = {$resDir}/Resources/Private/Templates/OneColumn.html
#
#	pagets__3 < .onecol
#
#}

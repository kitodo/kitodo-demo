# Install

* Clone the repository in your extension path with the name <b>'presentation_package'</b> with

   <code>git clone https://github.com/kitodo/kitodo-demo.git presentation_package</code>

* cd to presentation_package
* <code>curl -sS https://getcomposer.org/installer | php</code>
* <code>php composer.phar install</code>
* Select in TYPO3 ADMIN TOOLS/Extensions // Installed Extensions // "Kitodo Presentation Package"	"presentation_package" and click on the "Activate"-Icon
* Select in TYPO3 WEB/Template // Info/Modify "Edit the whole template record" // Includes in "Available Items" the "Kitodo Presentation Package (presentation_package)" and double click on it, so that it switch to the "Include static (from extensions):"

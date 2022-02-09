<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\FluidTYPO3\Flux\Core::registerProviderExtensionKey('Kitodo.PresentationPackage', 'Content');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('Kitodo.PresentationPackage', 'Page');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('presentation_package','Configuration/TypoScript', 'Presentation Package');

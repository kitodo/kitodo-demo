<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Kitodo Presentation Package',
	'description' => '',
	'category' => 'distribution',
	'author' => 'Christopher Timm',
	'author_email' => 'timm@effective-webwork.de',
	'state' => 'stable',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'version' => '7.6.2',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.6.2-8.9.99',
			'fluid_styled_content' => '',
		),
		'conflicts' => array(
			'css_styled_content' => '',
		),
		'suggests' => array(
		),
	),
);
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
	'version' => '8.7',
	'constraints' => array(
		'depends' => array(
			'typo3' => '8.7-9.9.99',
			'flux' => '8-9.9',
		),
		'suggests' => array(
		),
	),
);
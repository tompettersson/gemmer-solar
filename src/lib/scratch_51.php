{strip}
{$sArticle.ordernumber|escape}{#S#}
{if $sArticle.articleID|category:" > "|escape != "UV-Gele > Aufbaugel"}{$sArticle.supplier|escape} {/if}{$sArticle.name|strip_tags|strip|truncate:80:"...":true|escape|htmlentities|replace:"Polish Color Gel":"UV Gel Nagellack"}{#S#}
{$sArticle.description_long|strip_tags|html_entity_decode|strip|truncate:500:"...":true|htmlentities|escape}{#S#}
{$sArticle.articleID|link:$sArticle.name|escape}{#S#}
{$sArticle.image|image:1}{#S#}
in_stock{#S#}
{$sArticle.ean|escape}{#S#}
{if $sArticle.weight}{$sArticle.weight|escape:"number"}{" kg"}{/if}{#S#}
{$sArticle.supplier|escape}{#S#}
{$sArticle.suppliernumber|escape}{#S#}
new{#S#}
{$sArticle.articleID|category:" > "|escape}{#S#}
{$sArticle.price|replace:',':'.'} EUR{#S#}
DE::DHL:{$sArticle|@shippingcost:"prepayment":"de"} EUR,AT::DHL:{$sArticle|@shippingcost:"prepayment":"at"} EUR{#S#}
{$sCurrency.currency}
{/strip}{#L#}
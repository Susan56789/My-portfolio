<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml">
<xsl:output
  omit-xml-declaration="no" method="xml"
  doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
  doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
  indent="yes" encoding="UTF-8"/>
<xsl:template match="/">
<html>
<head>
<title>SiteMap - Web Site By Susan Wairimu</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style type="text/css">
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 68.5%;
  color: #333;
}
table {
  border: none;
  border-collapse: collapse;
}
.sitemap tr.odd {
  background-color: #f7f7f7;
}
.sitemap tbody tr:hover {
  background-color: #ddf4df;
}
.sitemap tbody tr:hover td, .sitemap tbody tr:hover td a {
  color: #060;
}
a {
  color: #000;
  text-decoration: none;
}
.intro p {
  color: #060;
}
a:hover {
  text-decoration: underline;
  color: #690;
}
table {
  font-size: 1em;
  width: 100%;
}
th {
  text-align: left;
  padding: 5px;
}
thead th {
  background-color: #ccffcc;
  border-bottom: 1px solid #99cc99;
  border-top: 1px solid #99cc99;
}
tbody tr {
  border-bottom: 1px dotted #CCC;
  padding: 5px 0;
}
</style>
</head>
<body>
<div id="content">
<h1><a href="index.php" title="Alecos Web Site"><img src="gfx/Logo.png" alt="[Alecos WebSite SiteMap]" border="0"/></a></h1>

<table class="sitemap" cellpadding="3">
  <thead>
    <tr>
      <th width="80%">URL</th>
      <th width="10%">Priority</th>
      <th width="10%">Change Frequency</th>
    </tr>
  </thead>
  <tbody>
    <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
    <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
    <xsl:for-each select="sitemap:urlset/sitemap:url">
      <tr>
        <td>
          <xsl:variable name="itemURL">
            <xsl:value-of select="sitemap:loc"/>
          </xsl:variable>
          <a href="{$itemURL}">
            <xsl:value-of select="sitemap:loc"/>
          </a>
        </td>
        <td>
          <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
        </td>
        <td>
          <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
        </td>
      </tr>
    </xsl:for-each>
  </tbody>
</table>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
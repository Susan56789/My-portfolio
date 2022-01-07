<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

    <xsl:output omit-xml-declaration="yes" method="html"/>
    <xsl:strip-space elements="*"/>

    <xsl:template match="/">
        <!DOCTYPE html>

        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
            <head>
                <title>SiteMap - Web Site By Susan Wairimu</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

            </head>
            <body>
                <div id="content">

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
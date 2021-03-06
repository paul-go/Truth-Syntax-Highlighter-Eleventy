
const Highlighter = require("truth-syntax-highlighter");

function hasTemplateFormat(templateFormats = ["*"], format = false)
{
	if (!Array.isArray(templateFormats))
		templateFormats = [templateFormats];
	
	if (Array.isArray(templateFormats))
		if (templateFormats.indexOf("*") > -1 || templateFormats.indexOf(format) > -1)
			return true;
	
	return false;
}

module.exports = {
	configFunction: function(eleventyConfig, options = {})
	{
		if (hasTemplateFormat(options.templateFormats, "njk"))
		{
			eleventyConfig.addPairedNunjucksShortcode("truth", content =>
			{
				return Highlighter.toHtml(content, "\t");
			});
		}
	}
};

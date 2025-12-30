import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
	links: {
	  "😸 GitHub": "https://github.com/dudeawsomeness1",
	  "ℹ️ LinkedIn": "https://www.linkedin.com/in/mcclain-jorgensen/",
	  "🐰 BorgBunnie": "https://www.youtube.com/@BorgBunnie",
	},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
	Component.ConditionalRender({
	  component: Component.Breadcrumbs(),
	  condition: (page) => page.fileData.slug !== "index",
	}),
	Component.ArticleTitle(),
	Component.ContentMeta(),
	// Component.TagList(),
  ],
  left: [
	Component.PageTitle(),
	Component.MobileOnly(Component.Spacer()),
	Component.Flex({
	  components: [
		{
		  Component: Component.Search(),
		  grow: true,
		},
		{ Component: Component.Darkmode() },
		{ Component: Component.ReaderMode() },
	  ],
	}),
	Component.Explorer({
		folderDefaultState: "open",
		filterFn: (node) => {
			// Hide specific folders/files by name
			const omit = new Set(["Unlisted"])
			return !omit.has(node.displayName.toLowerCase())
		},
	}),
  ],
  right: [
	// Component.Graph(),
	Component.DesktopOnly(Component.TableOfContents()),
	Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
	Component.PageTitle(),
	Component.MobileOnly(Component.Spacer()),
	Component.Flex({
	  components: [
		{
		  Component: Component.Search(),
		  grow: true,
		},
		{ Component: Component.Darkmode() },
	  ],
	}),
	Component.Explorer({
		folderDefaultState: "open",
		filterFn: (node) => {
			// Hide specific folders/files by name
			const omit = new Set(["Unlisted"])
			return !omit.has(node.displayName.toLowerCase())
		},
	}),
  ],
  right: [],
}

// Component.Explorer({
//   filterFn: (node) => {
// 	// Hide files with specific tag
// 	return node.data?.tags?.includes("hidden") !== true
//   },
// })
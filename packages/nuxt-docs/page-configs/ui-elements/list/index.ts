import { definePageConfig } from "~~/types/page-config";
import VaList from 'vuestic-ui/src/components/va-list/VaList.vue'
import VaListLabel from 'vuestic-ui/src/components/va-list/VaListLabel.vue'
import VaListSeparator from 'vuestic-ui/src/components/va-list/VaListSeparator.vue'
import VaListItem from 'vuestic-ui/src/components/va-list/VaListItem.vue'
import VaListItemLabel from 'vuestic-ui/src/components/va-list/VaListItemLabel.vue'
import VaListItemSection from 'vuestic-ui/src/components/va-list/VaListItemSection.vue'
import {
  listApiOptions,
  listLabelApiOptions,
  listSeparatorApiOptions,
  listItemApiOptions,
  listItemLabelApiOptions,
  listItemSectionApiOptions,
} from './api-options'
const block = useDocsBlocks(import.meta);

export default definePageConfig({
  blocks: [
    block.title("list.title"),
    block.paragraph("list.summaryText"),

    block.subtitle("all.examples"),

    block.exampleBlock("Default"),
    block.exampleBlock("Disabled"),
    block.exampleBlock("Clickable"),
    block.exampleBlock("Fit"),
    block.exampleBlock("Lines"),

    block.subtitle("all.api"),

    block.paragraph("list.api.list.text"),
    block.api(VaList, listApiOptions),

    block.subtitle("list.api.listLabel.title"),
    block.paragraph("list.api.listLabel.text"),
    block.api(VaListLabel, listLabelApiOptions),

    block.subtitle("list.api.listSeparator.title"),
    block.paragraph("list.api.listSeparator.text"),
    block.api(VaListSeparator, listSeparatorApiOptions),

    block.subtitle("list.api.listItem.title"),
    block.paragraph("list.api.listItem.text"),
    block.api(VaListItem, listItemApiOptions),

    block.subtitle("list.api.listItemLabel.title"),
    block.paragraph("list.api.listItemLabel.text"),
    block.api(VaListItemLabel, listItemLabelApiOptions),

    block.subtitle("list.api.listItemSection.title"),
    block.paragraph("list.api.listItemSection.text"),
    block.api(VaListItemSection, listItemSectionApiOptions),
  ],
});

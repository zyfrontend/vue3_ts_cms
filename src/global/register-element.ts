import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElContainer,
  ElHeader,
  ElMain,
  ElTabs,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElBreadcrumb,
  ElDropdown,
  ElDropdownItem,
  ElBreadcrumbItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElDatePicker
} from 'element-plus'
import { UserFilled, PhoneFilled, Calendar } from '@element-plus/icons'
const components = [
  ElSelect,
  ElRow,
  ElCol,
  ElAvatar,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElOption,
  ElOptionGroup,
  ElDatePicker,
  UserFilled,
  Calendar,
  PhoneFilled
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

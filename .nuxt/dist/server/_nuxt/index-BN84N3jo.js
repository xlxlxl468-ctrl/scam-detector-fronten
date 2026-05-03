import { useAttrs, computed, toValue, defineComponent, toRef, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext, openBlock, createBlock, createCommentVNode, inject, ref, watch, nextTick, getCurrentInstance, provide, toDisplayString, useId as useId$1, toRaw, createTextVNode, Fragment, renderList } from "vue";
import { twJoin } from "tailwind-merge";
import { a as useAppConfig, m as mergeConfig, g as get, o as omit, _ as _export_sfc, t as twMerge, b as appConfig, l as looseToNumber, c as useRuntimeConfig } from "../server.mjs";
import { ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDynamicModelProps } from "vue/server-renderer";
import { defu } from "C:/專題/frontend/node_modules/defu/dist/defu.mjs";
import { useDebounceFn, useVModel } from "@vueuse/core";
import { _ as __nuxt_component_0$3 } from "./nuxt-link-DFv91LUv.js";
import { isEqual, diff } from "ohash/utils";
import { _ as __nuxt_component_0$4, a as __nuxt_component_10 } from "./index-B-fh217B.js";
import "C:/專題/frontend/node_modules/hookable/dist/index.mjs";
import "C:/專題/frontend/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import { upperFirst } from "C:/專題/frontend/node_modules/scule/dist/index.mjs";
import "C:/專題/frontend/node_modules/ofetch/dist/node.mjs";
import "C:/專題/frontend/node_modules/unctx/dist/index.mjs";
import "C:/專題/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/專題/frontend/node_modules/ufo/dist/index.mjs";
import "C:/專題/frontend/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/專題/frontend/node_modules/perfect-debounce/dist/index.mjs";
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      _ui?.strategy || appConfig2.ui?.strategy,
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  caption: "sr-only",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    expanded: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  expand: {
    icon: "transform transition-transform duration-200"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    expandButton: {
      icon: "i-heroicons-chevron-down",
      color: "gray",
      variant: "ghost",
      size: "xs",
      class: "-my-1.5 align-middle"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    "xs": "h-6 w-6 text-xs",
    "sm": "h-8 w-8 text-sm",
    "md": "h-10 w-10 text-base",
    "lg": "h-12 w-12 text-lg",
    "xl": "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      "xs": "h-3 w-3",
      "sm": "h-4 w-4",
      "md": "h-5 w-5",
      "lg": "h-6 w-6",
      "xl": "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  gap: {
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-1",
    lg: "gap-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const alert = {
  wrapper: "w-full relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium",
  description: "mt-1 text-sm leading-4 opacity-90",
  descriptionOnly: "mt-0 leading-5",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  shadow: "",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  color: {
    white: {
      solid: "text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    color: "white",
    variant: "solid",
    icon: null,
    closeButton: null,
    actionButton: {
      size: "xs",
      color: "primary",
      variant: "link"
    }
  }
};
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      "xs": "h-0.5",
      "sm": "h-1",
      "md": "h-2",
      "lg": "h-3",
      "xl": "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    "carousel": "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    "swing": "bar-animation-swing",
    "elastic": "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"
  },
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      "xs": "ps-8",
      "sm": "ps-9",
      "md": "ps-10",
      "lg": "ps-11",
      "xl": "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      "xs": "pe-8",
      "sm": "pe-9",
      "md": "pe-10",
      "lg": "pe-11",
      "xl": "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const inputMenu = {
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  }
};
const textarea = {
  ...input,
  form: "form-textarea",
  default: {
    size: "sm",
    color: "white",
    variant: "outline"
  }
};
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-400 dark:text-gray-500",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
({
  option: {
    ...inputMenu.option
  }
});
const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const config$b = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$e = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config$b);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$d]]);
const config$a = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$d = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$a);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$c]]);
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (!bind || inputProps?.legend) {
      formGroup.inputId.value = void 0;
    } else if (inputProps?.id) {
      formGroup.inputId.value = inputProps?.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup?.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup?.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || formGroup?.eagerValidation.value) {
      emitFormEvent("input", formGroup?.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => inputProps?.id ?? formGroup?.inputId.value),
    name: computed(() => inputProps?.name ?? formGroup?.name.value),
    size: computed(() => {
      const formGroupSize = config2.size[formGroup?.size.value] ? formGroup?.size.value : null;
      return inputProps?.size ?? formGroupSize ?? config2.default?.size;
    }),
    color: computed(() => formGroup?.error?.value ? "red" : inputProps?.color),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config$9 = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
const _sfc_main$c = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    maxrows: {
      type: Number,
      default: 0
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$9.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$9.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$9.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$9.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$9.variant),
          ...Object.values(config$9.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config$9, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config$9);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const textarea2 = ref(null);
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const overflow = textarea2.value.style.overflow;
        textarea2.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textarea2.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textarea2.value.style.overflow = overflow;
      }
    };
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number) {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value ||= null;
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      autoResize();
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      emit("change", value);
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const textareaClass = computed(() => {
      const variant = ui.value.color?.[color.value]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant?.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: _ctx.textareaClass
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$b = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
        if (q.type === "added") {
          filtered.add(q.key);
        }
        return filtered;
      }, /* @__PURE__ */ new Set());
      const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)));
      const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)));
      return isEqual(item1Filtered, item2Filtered);
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$3;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : void 0
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : void 0,
              onClick: (e) => !isExternal && !_ctx.disabled && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$a = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false,
      default: null
    }
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$4;
  _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$props, _attrs), null, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext?.value.children.indexOf(instance));
  return {
    size: computed(() => {
      if (!groupContext?.value) return props.size;
      return groupContext?.value.size ?? ui.value.default.size;
    }),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1) return ui.value.rounded;
      if (groupContext.value.children.length === 1) return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0) return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1) return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$8 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$9 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1,
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$8.default.size,
      validator(value) {
        return Object.keys(config$8.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$8.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$8.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$8.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$8.variant),
          ...Object.values(config$8.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$8.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$8);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      const variant = ui.value.color?.[props.color]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant?.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UIcon = __nuxt_component_3$1;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label !== void 0 && _ctx.label !== null) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label !== void 0 && _ctx.label !== null ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const config$7 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$8 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$7.default.icon
    },
    size: {
      type: String,
      default: () => config$7.default.size,
      validator(value) {
        return Object.keys(config$7.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$7.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$7.default.chipPosition,
      validator(value) {
        return Object.keys(config$7.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$7);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const config$6 = mergeConfig(appConfig.ui.strategy, appConfig.ui.alert, alert);
const _sfc_main$7 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_3
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$6.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$6.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: () => config$6.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$6.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$6.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$6.variant),
          ...Object.values(config$6.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close"],
  setup(props) {
    const { ui, attrs } = useUI("alert", toRef(props, "ui"), config$6);
    const alertClass = computed(() => {
      const variant = ui.value.color?.[props.color]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant?.replaceAll("{color}", props.color)
      ), props.class);
    });
    function onAction(action) {
      if (action.click) {
        action.click();
      }
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      alertClass,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3$1;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.alertClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([[_ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  ssrRenderSlot(_ctx.$slots, "icon", { icon: _ctx.icon }, () => {
    if (_ctx.icon) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.icon,
        class: _ctx.ui.icon.base
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "avatar", { avatar: _ctx.avatar }, () => {
    if (_ctx.avatar) {
      _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
        class: _ctx.ui.avatar.base
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !_ctx.title && !_ctx.$slots.title && _ctx.ui.descriptionOnly))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && (_ctx.actions.length || _ctx.$slots.actions)) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index2) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index2 }, { ref_for: true }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && (_ctx.actions.length || _ctx.$slots.actions)) {
      ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.actions, (action, index2) => {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index2 }, { ref_for: true }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
            onClick: ($event) => _ctx.onAction(action)
          }), null, _parent));
        });
        _push(`<!--]-->`);
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, {
        onClick: ($event) => _ctx.$emit("close")
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Alert.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$6 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config$5.default.size,
      validator(value) {
        return Object.keys(config$5.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$5.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$5.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$5.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$5.variant),
          ...Object.values(config$5.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config$5);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.trailing || props.trailingIcon;
    });
    const badgeClass = computed(() => {
      const variant = ui.value.color?.[props.color]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        variant?.replaceAll("{color}", props.color)
      ), props.class);
    });
    const leadingIconName = computed(() => {
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      badgeClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
    if (_ctx.isLeading && _ctx.leadingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if (_ctx.label !== void 0 && _ctx.label !== null) {
      _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
    if (_ctx.isTrailing && _ctx.trailingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$5 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$4.default.animation,
      validator(value) {
        return Object.keys(config$4.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$4.default.size,
      validator(value) {
        return Object.keys(config$4.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$4.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$4, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        ui.value.progress.color?.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      return twJoin(
        ui.value.steps.base,
        ui.value.steps.color?.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index2) {
      return index2 === Number(props.value);
    }
    function isFirst(index2) {
      return index2 === 0;
    }
    function stepClasses(index2) {
      index2 = Number(index2);
      const classes = [stepClass.value];
      if (isFirst(index2)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index2)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    role: "progressbar"
  }, _attrs))} data-v-e0a22531>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-e0a22531><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-e0a22531>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({
    "aria-valuemax": _ctx.realMax,
    "aria-valuenow": _ctx.value,
    class: _ctx.progressClass
  }, { value: _ctx.value, max: _ctx.realMax, ..._ctx.attrs }))} data-v-e0a22531>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-e0a22531><!--[-->`);
    ssrRenderList(_ctx.max, (step, index2) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index2))}" data-v-e0a22531>`);
      ssrRenderSlot(_ctx.$slots, `step-${index2}`, mergeProps({ ref_for: true }, { step }), () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e0a22531"]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$3.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$3.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$3.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$3.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$3.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$3.variant),
          ...Object.values(config$3.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config$3, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config$3);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value ||= null;
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      const variant = ui.value.color?.[color.value]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && ui.value.file.base,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant?.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.type === "hidden" ? "hidden" : _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.type === "file" ? _ctx.attrs : { ..._ctx.attrs, value: _ctx.modelValue }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$2.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config$2.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config$2, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config$2);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emit("change", event.target.value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, "");
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, "");
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      const variant = ui.value.color?.[color.value]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant?.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      normalizedOptionsWithPlaceholder,
      normalizedValue,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))} data-v-cbc9516f><select${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled,
    class: _ctx.selectClass
  }, _ctx.attrs))} data-v-cbc9516f><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index2) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])} data-v-cbc9516f><!--[-->`);
      ssrRenderList(option.children, (childOption, index22) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""} data-v-cbc9516f>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""} data-v-cbc9516f>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}" data-v-cbc9516f>`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}" data-v-cbc9516f>`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cbc9516f"]]);
const useId = useId$1;
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config$1, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = _inputId.value ?? useId();
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.checked);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help || _ctx.$slots.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">`);
      ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
        _push(`${ssrInterpolate(_ctx.help)}`);
      }, _push, _parent);
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a, z) {
  return isEqual(a, z);
}
function defaultSort(a, b, direction) {
  if (a === b) {
    return 0;
  }
  if (direction === "asc") {
    return a < b ? -1 : 1;
  } else {
    return a > b ? -1 : 1;
  }
}
function getStringifiedSet(arr) {
  return new Set(arr.map((item) => JSON.stringify(item)));
}
function accessor(key) {
  return (obj) => get(obj, key);
}
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_3$1,
    UButton: __nuxt_component_3,
    UProgress: __nuxt_component_6,
    UCheckbox: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config.default.sortDescIcon
    },
    expandButton: {
      type: Object,
      default: () => config.default.expandButton
    },
    expand: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config.default.emptyState
    },
    caption: {
      type: String,
      default: null
    },
    progress: {
      type: Object,
      default: () => config.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    multipleExpand: {
      type: Boolean,
      default: true
    },
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:sort", "update:expand", "select:all"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config, toRef(props, "class"));
    const columns = computed(() => {
      const defaultColumns = props.columns ?? Object.keys(props.rows[0]).map((key) => ({
        key,
        label: upperFirst(key),
        sortable: false,
        class: void 0,
        sort: defaultSort
      }));
      const hasColumnSelect = defaultColumns.find((v) => v.key === "select");
      if (hasColumnSelect || !props.modelValue) {
        return defaultColumns;
      }
      return [{
        key: "select",
        sortable: false,
        class: void 0,
        sort: defaultSort
      }, ...defaultColumns];
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const expand = useVModel(props, "expand", emit, {
      passive: true,
      defaultValue: defu({}, props.expand, {
        openedRows: [],
        row: null
      })
    });
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      if (!sort.value?.column || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a, b) => {
        const aValue = get(a, column);
        const bValue = get(b, column);
        const sort2 = columns.value.find((col) => col.key === column)?.sort ?? defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const totalRows = computed(() => props.rows.length);
    const countCheckedRow = computed(() => {
      const selectedData = getStringifiedSet(selected.value);
      const rowsData = getStringifiedSet(props.rows);
      return Array.from(selectedData).filter((item) => rowsData.has(item)).length;
    });
    const indeterminate = computed(() => {
      if (!selected.value || !props.rows) return false;
      return countCheckedRow.value > 0 && countCheckedRow.value < totalRows.value;
    });
    const isAllRowChecked = computed(() => countCheckedRow.value === totalRows.value);
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null) return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a, z) {
      if (typeof props.by === "string") {
        const accesorFn = accessor(props.by);
        return accesorFn(a) === accesorFn(z);
      }
      return props.by(a, z);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      const selection = (void 0).getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function onContextmenu(event, row) {
      if (!$attrs.onContextmenu) {
        return;
      }
      $attrs.onContextmenu(event, row);
    }
    function selectAllRows() {
      const newSelected = [...selected.value];
      props.rows.forEach((row) => {
        if (!isSelected(row)) {
          newSelected.push(row);
        }
      });
      selected.value = newSelected;
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
      emit("select:all", checked);
    }
    function onChangeCheckbox(checked, row) {
      if (checked) {
        selected.value = props.singleSelect ? [row] : [...selected.value, row];
      } else {
        selected.value = selected.value.filter((value) => !compare(toRaw(value), toRaw(row)));
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    function isExpanded(row) {
      return expand.value?.openedRows ? expand.value.openedRows.some((openedRow) => compare(openedRow, row)) : false;
    }
    function toggleOpened(row) {
      expand.value = {
        openedRows: isExpanded(row) ? expand.value.openedRows.filter((v) => !compare(v, row)) : props.multipleExpand ? [...expand.value.openedRows, row] : [row],
        row
      };
    }
    function getAriaSort(column) {
      if (!column.sortable) {
        return void 0;
      }
      if (sort.value.column !== column.key) {
        return "none";
      }
      if (sort.value.direction === "asc") {
        return "ascending";
      }
      if (sort.value.direction === "desc") {
        return "descending";
      }
      return void 0;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isAllRowChecked,
      onChangeCheckbox,
      isSelected,
      onSort,
      onSelect,
      onContextmenu,
      onChange,
      getRowData,
      toggleOpened,
      getAriaSort,
      isExpanded
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0;
  const _component_UButton = __nuxt_component_3;
  const _component_UProgress = __nuxt_component_6;
  const _component_UIcon = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}">`);
  if (_ctx.$slots.caption || _ctx.caption) {
    ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
      _push(`<caption class="${ssrRenderClass(_ctx.ui.caption)}">${ssrInterpolate(_ctx.caption)}</caption>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.expand) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.tr.base)}"><span class="sr-only">Expand</span></th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index2) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.key === "select" && _ctx.ui.checkbox.padding, column.class])}"${ssrRenderAttr("aria-sort", _ctx.getAriaSort(column))}>`);
    if (!_ctx.singleSelect && _ctx.modelValue && column.key === "select") {
      ssrRenderSlot(_ctx.$slots, "select-header", {
        indeterminate: _ctx.indeterminate,
        checked: _ctx.isAllRowChecked,
        change: _ctx.onChange
      }, () => {
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          "model-value": _ctx.isAllRowChecked,
          indeterminate: _ctx.indeterminate
        }, { ref_for: true }, _ctx.ui.default.checkbox, {
          "aria-label": "Select all",
          onChange: _ctx.onChange
        }), null, _parent));
      }, _push, _parent);
    } else {
      ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
        column,
        sort: _ctx.sort,
        onSort: _ctx.onSort
      }, () => {
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
            icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
            label: column[_ctx.columnAttribute],
            onClick: ($event) => _ctx.onSort(column)
          }), null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
        }
      }, _push, _parent);
    }
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index2) => {
      _push(`<!--[--><tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.isExpanded(row) && _ctx.ui.tr.expanded, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row?.class])}">`);
      if (_ctx.expand) {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        if (_ctx.$slots["expand-action"]) {
          ssrRenderSlot(_ctx.$slots, "expand-action", {
            row,
            isExpanded: _ctx.isExpanded(row),
            toggle: () => _ctx.toggleOpened(row)
          }, null, _push, _parent);
        } else {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            disabled: row.disabledExpand
          }, { ref_for: true }, { ..._ctx.ui.default.expandButton || {}, ..._ctx.expandButton }, {
            ui: { icon: { base: [_ctx.ui.expand.icon, _ctx.isExpanded(row) && "rotate-180"].join(" ") } },
            onClick: ($event) => _ctx.toggleOpened(row)
          }), null, _parent));
        }
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, column?.rowClass, row[column.key]?.class, column.key === "select" && _ctx.ui.checkbox.padding])}">`);
        if (_ctx.modelValue && column.key === "select") {
          _push(`<span>`);
          ssrRenderSlot(_ctx.$slots, "select-data", {
            checked: _ctx.isSelected(row),
            change: (ev) => _ctx.onChangeCheckbox(ev, row)
          }, () => {
            _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
              "model-value": _ctx.isSelected(row)
            }, { ref_for: true }, _ctx.ui.default.checkbox, {
              "aria-label": "Select row",
              onChange: ($event) => _ctx.onChangeCheckbox($event, row)
            }), null, _parent));
          }, _push, _parent);
          _push(`</span>`);
        } else {
          ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
            column,
            row,
            index: index2,
            getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
          }, () => {
            _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
          }, _push, _parent);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
      if (_ctx.isExpanded(row)) {
        _push(`<tr><td colspan="100%">`);
        ssrRenderSlot(_ctx.$slots, "expand", {
          row,
          index: index2
        }, null, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useScamApi = () => {
  const config2 = useRuntimeConfig();
  const base = config2.public.apiBase;
  const predict = async (text) => {
    const res = await $fetch(`${base}/predict`, {
      method: "POST",
      body: { text }
    });
    return res.result;
  };
  const batch = async (texts) => {
    return await $fetch(`${base}/batch`, {
      method: "POST",
      body: { texts }
    });
  };
  const chat = async (question, context) => {
    const res = await $fetch(`${base}/chat`, {
      method: "POST",
      body: { question, context: context || {} }
    });
    return res.answer;
  };
  const scanUrl = async (url) => {
    return await $fetch(`${base}/url-scan`, {
      method: "POST",
      body: { url }
    });
  };
  const detectPhones = async (text) => {
    return await $fetch(`${base}/phone-detect`, {
      method: "POST",
      body: { text }
    });
  };
  const analyzeOcr = async (file) => {
    const form = new FormData();
    form.append("image", file);
    return await $fetch(`${base}/ocr-analyze`, {
      method: "POST",
      body: form
    });
  };
  return { predict, batch, chat, scanUrl, detectPhones, analyzeOcr };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("");
    const loading = ref(false);
    const error = ref("");
    const result = ref(null);
    const introDone = ref(false);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const batchText = ref("");
    const batchLoading = ref(false);
    const batchError = ref("");
    const batchResults = ref([]);
    const batchFilter = ref("all");
    const neonMode = ref(true);
    const historyItems = ref([]);
    const shellGlow = ref({ x: 50, y: 10, active: false });
    const tiltState = ref({ rx: 0, ry: 0, gx: 50, gy: 50 });
    const isLiteFx = ref(false);
    const live2dRef = ref(null);
    const bgParticles = ref([]);
    const modeParticles = ref([]);
    const modeBurstActive = ref(false);
    const displayGauge = ref(0);
    const displayProbability = ref(0);
    const displayStats = ref({ total: 0, scam: 0, normal: 0, rate: 0 });
    const riskShake = ref(false);
    const singleSoftGlow = ref(false);
    const urlSoftGlow = ref(false);
    const phoneSoftGlow = ref(false);
    const chatInput = ref("");
    const chatLoading = ref(false);
    const chatError = ref("");
    const chatOpen = ref(true);
    const assistantTalkingUntil = ref(0);
    const urlInput = ref("");
    const urlLoading = ref(false);
    const urlError = ref("");
    const urlResult = ref(null);
    const ocrLoading = ref(false);
    const ocrError = ref("");
    const ocrResult = ref(null);
    const ocrInputRef = ref(null);
    const phoneInput = ref("");
    const phoneLoading = ref(false);
    const phoneError = ref("");
    const phoneMatches = ref([]);
    const chatMessages = ref([
      { role: "assistant", content: "你好，我是詐騙防護 AI 助理。你可以問我：這則訊息為什麼是高風險？接下來該怎麼做？", ts: Date.now() }
    ]);
    let shakeTimer = null;
    let singleGlowTimer = null;
    let urlGlowTimer = null;
    let phoneGlowTimer = null;
    const { predict, batch, chat: askChat, scanUrl, analyzeOcr, detectPhones } = useScamApi();
    const RISK_KEYWORDS = [
      "中獎",
      "領獎",
      "點擊",
      "驗證",
      "帳戶",
      "帳號",
      "密碼",
      "OTP",
      "轉帳",
      "銀行",
      "連結",
      "bit.ly",
      "tinyurl",
      "立即",
      "限時",
      "高報酬",
      "投資",
      "異常",
      "停用"
    ];
    const escapeHtml = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
    const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const highlightedHtml = computed(() => {
      if (!text.value) return "";
      let out = escapeHtml(text.value);
      for (const kw of RISK_KEYWORDS) {
        const re = new RegExp(escapeRegExp(kw), "gi");
        out = out.replace(re, (m) => `<mark class="kw-mark">${m}</mark>`);
      }
      return out.replace(/\n/g, "<br>");
    });
    const keywordHits = computed(() => {
      const t = text.value.toLowerCase();
      return RISK_KEYWORDS.filter((k) => t.includes(k.toLowerCase()));
    });
    const gaugeValue = computed(() => Math.round((result.value?.probability ?? 0) * 100));
    const gaugeStyle = computed(() => ({
      background: `conic-gradient(${gaugeValue.value < 40 ? "#34d399" : gaugeValue.value < 70 ? "#fbbf24" : "#f87171"} ${gaugeValue.value * 3.6}deg, rgba(51,65,85,.45) 0deg)`
    }));
    const isRiskHigh = computed(() => Boolean(result.value?.is_scam && (result.value?.probability ?? 0) >= 0.75));
    const filteredBatchResults = computed(() => {
      const sorted = [...batchResults.value].sort((a, b) => b.probability - a.probability);
      if (batchFilter.value === "scam") return sorted.filter((r) => r.is_scam);
      if (batchFilter.value === "normal") return sorted.filter((r) => !r.is_scam);
      return sorted;
    });
    const stats = computed(() => {
      const total = batchResults.value.length;
      const scam = batchResults.value.filter((r) => r.is_scam).length;
      const normal = total - scam;
      const rate = total ? (scam / total * 100).toFixed(1) : "0.0";
      return { total, scam, normal, rate };
    });
    const shellStyle = computed(() => {
      if (!shellGlow.value.active) return {};
      return {
        background: `radial-gradient(260px circle at ${shellGlow.value.x}% ${shellGlow.value.y}%, rgba(56,189,248,0.14), transparent 60%)`
      };
    });
    const tiltStyle = computed(() => ({
      transform: `perspective(900px) rotateX(${tiltState.value.rx}deg) rotateY(${tiltState.value.ry}deg)`,
      backgroundImage: `radial-gradient(260px circle at ${tiltState.value.gx}% ${tiltState.value.gy}%, rgba(56,189,248,0.16), rgba(2,6,23,0.55))`
    }));
    const urlGaugeStyle = computed(() => {
      const v = Number(urlResult.value?.safety_score ?? 0);
      const color = v >= 80 ? "#34d399" : v >= 60 ? "#fbbf24" : "#f87171";
      return {
        background: `conic-gradient(${color} ${Math.max(0, Math.min(100, v)) * 3.6}deg, rgba(51,65,85,.45) 0deg)`
      };
    });
    const phoneDashboard = computed(() => {
      if (!phoneMatches.value.length) {
        return { safetyScore: 0, riskScore: 0, riskLevel: "LOW" };
      }
      const risk = phoneMatches.value.reduce((sum, m) => sum + Number(m.risk_score || 0), 0) / phoneMatches.value.length;
      return {
        safetyScore: Math.max(0, 100 - risk),
        riskScore: risk,
        riskLevel: risk >= 70 ? "HIGH" : risk >= 40 ? "MEDIUM" : "LOW"
      };
    });
    const phoneGaugeStyle = computed(() => {
      const v = Number(phoneDashboard.value.safetyScore ?? 0);
      const color = v >= 80 ? "#34d399" : v >= 60 ? "#fbbf24" : "#f87171";
      return {
        background: `conic-gradient(${color} ${Math.max(0, Math.min(100, v)) * 3.6}deg, rgba(51,65,85,.45) 0deg)`
      };
    });
    const isUrlRiskHigh = computed(() => {
      const risk = Number(urlResult.value?.risk_score ?? 0);
      return !urlResult.value?.is_whitelisted && risk >= 70;
    });
    const isPhoneRiskHigh = computed(() => {
      const risk = Number(phoneDashboard.value?.riskScore ?? 0);
      return risk >= 70;
    });
    computed(() => {
      if (chatLoading.value) return "thinking";
      if (Date.now() < assistantTalkingUntil.value) return "talking";
      if (isRiskHigh.value || isUrlRiskHigh.value || isPhoneRiskHigh.value) return "warning";
      return "idle";
    });
    const animateValue = (from, to, duration, setter) => {
      const now = () => typeof performance !== "undefined" && typeof performance.now === "function" ? performance.now() : Date.now();
      const nextFrame = (cb) => {
        setTimeout(() => cb(now()), 16);
      };
      const start = now();
      const delta = to - from;
      const step = (now2) => {
        const p = Math.min(1, (now2 - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setter(from + delta * eased);
        if (p < 1) nextFrame(step);
      };
      nextFrame(step);
    };
    const runPredict = async () => {
      error.value = "";
      result.value = null;
      if (!text.value.trim()) {
        error.value = "請先輸入訊息";
        return;
      }
      live2dRef.value?.act?.("sp1");
      loading.value = true;
      try {
        result.value = await predict(text.value);
        if (result.value?.probability >= 0.7) {
          live2dRef.value?.expr?.(8);
        } else {
          live2dRef.value?.expr?.(2);
        }
        historyItems.value.unshift({
          text: text.value,
          probability: Number(result.value?.probability ?? 0),
          is_scam: Boolean(result.value?.is_scam),
          ts: Date.now()
        });
        historyItems.value = historyItems.value.slice(0, 20);
        localStorage.setItem("scam_history", JSON.stringify(historyItems.value));
      } catch (e) {
        error.value = e?.data?.error || e?.message || "檢測失敗";
      } finally {
        loading.value = false;
      }
    };
    const runBatch = async () => {
      batchError.value = "";
      batchResults.value = [];
      const texts = batchText.value.split("\n").map((v) => v.trim()).filter(Boolean);
      if (!texts.length) {
        batchError.value = "請至少輸入一行訊息";
        return;
      }
      batchLoading.value = true;
      try {
        const res = await batch(texts);
        batchResults.value = res.results || [];
      } catch (e) {
        batchError.value = e?.data?.error || e?.message || "批量檢測失敗";
      } finally {
        batchLoading.value = false;
      }
    };
    const sendChat = async () => {
      chatError.value = "";
      const question = chatInput.value.trim();
      if (!question) {
        chatError.value = "請先輸入問題";
        return;
      }
      chatMessages.value.push({ role: "user", content: question, ts: Date.now() });
      chatInput.value = "";
      chatLoading.value = true;
      try {
        const answer = await askChat(question, {
          text: text.value,
          is_scam: result.value?.is_scam,
          probability: result.value?.probability,
          risk_level: result.value?.risk_level,
          risk_description: result.value?.risk_description,
          reason: result.value?.reason
        });
        chatMessages.value.push({ role: "assistant", content: answer, ts: Date.now() });
      } catch (e) {
        chatError.value = e?.data?.error || e?.message || "AI 回覆失敗";
      } finally {
        chatLoading.value = false;
      }
    };
    const runUrlScan = async () => {
      urlError.value = "";
      urlResult.value = null;
      const input2 = urlInput.value.trim();
      if (!input2) {
        urlError.value = "請先貼上網址";
        return;
      }
      live2dRef.value?.act?.("sp2");
      urlLoading.value = true;
      try {
        urlResult.value = await scanUrl(input2);
      } catch (e) {
        urlError.value = e?.data?.error || e?.message || "網址掃描失敗";
      } finally {
        urlLoading.value = false;
      }
    };
    const onOcrUpload = async (ev) => {
      ocrError.value = "";
      ocrResult.value = null;
      const target = ev.target;
      const file = target?.files?.[0];
      if (!file) return;
      ocrLoading.value = true;
      try {
        ocrResult.value = await analyzeOcr(file);
        if (ocrResult.value?.text) {
          text.value = ocrResult.value.text;
        }
      } catch (e) {
        ocrError.value = e?.data?.error || e?.message || "OCR 分析失敗";
      } finally {
        ocrLoading.value = false;
        if (target) target.value = "";
      }
    };
    const openOcrPicker = () => {
      ocrInputRef.value?.click();
    };
    const runPhoneDetect = async () => {
      phoneError.value = "";
      phoneMatches.value = [];
      const source = phoneInput.value.trim() || text.value.trim() || ocrResult.value?.text || "";
      if (!source) {
        phoneError.value = "請先輸入文字或先做 OCR";
        return;
      }
      live2dRef.value?.act?.("sp3");
      phoneLoading.value = true;
      try {
        const res = await detectPhones(source);
        phoneMatches.value = res.matches || [];
      } catch (e) {
        phoneError.value = e?.data?.error || e?.message || "電話辨識失敗";
      } finally {
        phoneLoading.value = false;
      }
    };
    const fillSample = (v) => text.value = v;
    const useHistoryItem = (item) => {
      text.value = item.text;
    };
    const onShellMove = (e) => {
      const el = e.currentTarget;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      shellGlow.value = {
        x: (e.clientX - rect.left) / rect.width * 100,
        y: (e.clientY - rect.top) / rect.height * 100,
        active: true
      };
    };
    const onShellLeave = () => {
      shellGlow.value.active = false;
    };
    const onTiltMove = (e) => {
      const el = e.currentTarget;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      tiltState.value = {
        ry: (px - 0.5) * 8,
        rx: (0.5 - py) * 8,
        gx: px * 100,
        gy: py * 100
      };
    };
    const onTiltLeave = () => {
      tiltState.value = { rx: 0, ry: 0, gx: 50, gy: 50 };
    };
    watch(gaugeValue, (to) => {
      animateValue(displayGauge.value, to, isLiteFx.value ? 180 : 520, (v) => {
        displayGauge.value = Math.round(v);
      });
    }, { immediate: true });
    watch(() => result.value?.probability, (to) => {
      const target = Number(to ?? 0) * 100;
      animateValue(displayProbability.value, target, isLiteFx.value ? 180 : 560, (v) => {
        displayProbability.value = v;
      });
    }, { immediate: true });
    watch(stats, (to) => {
      animateValue(displayStats.value.total, to.total, 420, (v) => {
        displayStats.value.total = Math.round(v);
      });
      animateValue(displayStats.value.scam, to.scam, 420, (v) => {
        displayStats.value.scam = Math.round(v);
      });
      animateValue(displayStats.value.normal, to.normal, 420, (v) => {
        displayStats.value.normal = Math.round(v);
      });
      animateValue(displayStats.value.rate, Number(to.rate), 520, (v) => {
        displayStats.value.rate = v;
      });
    }, { immediate: true });
    watch(isRiskHigh, (high) => {
      if (!high || isLiteFx.value) return;
      riskShake.value = true;
      if (shakeTimer) clearTimeout(shakeTimer);
      shakeTimer = setTimeout(() => {
        riskShake.value = false;
      }, 420);
    });
    watch(() => chatMessages.value.length, () => {
      const last = chatMessages.value[chatMessages.value.length - 1];
      if (last?.role === "assistant") {
        assistantTalkingUntil.value = Date.now() + 2600;
      }
    });
    watch(() => result.value, (val) => {
      if (!val) return;
      singleSoftGlow.value = true;
      if (singleGlowTimer) clearTimeout(singleGlowTimer);
      singleGlowTimer = setTimeout(() => {
        singleSoftGlow.value = false;
      }, 700);
    });
    watch(() => urlResult.value, (val) => {
      if (!val) return;
      urlSoftGlow.value = true;
      if (urlGlowTimer) clearTimeout(urlGlowTimer);
      urlGlowTimer = setTimeout(() => {
        urlSoftGlow.value = false;
      }, 700);
    });
    watch(() => phoneMatches.value.length, (len) => {
      if (!len) return;
      phoneSoftGlow.value = true;
      if (phoneGlowTimer) clearTimeout(phoneGlowTimer);
      phoneGlowTimer = setTimeout(() => {
        phoneSoftGlow.value = false;
      }, 700);
    });
    const downloadCsv = () => {
      if (!batchResults.value.length) return;
      const header = ["text", "is_scam", "probability", "risk_level", "risk_description", "reason"];
      const rows = batchResults.value.map((r) => [
        String(r.text ?? "").replaceAll('"', '""'),
        r.is_scam ? "1" : "0",
        Number(r.probability ?? 0).toFixed(6),
        r.risk_level ?? "",
        r.risk_description ?? "",
        String(r.reason ?? "").replaceAll('"', '""')
      ]);
      const csv = [header.join(","), ...rows.map((cols) => cols.map((c) => `"${c}"`).join(","))].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = (void 0).createElement("a");
      a.href = url;
      a.download = "batch_detection_results.csv";
      a.click();
      URL.revokeObjectURL(url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$2;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UTextarea = __nuxt_component_2;
      const _component_UButton = __nuxt_component_3;
      const _component_UAlert = __nuxt_component_4;
      const _component_UBadge = __nuxt_component_5;
      const _component_UProgress = __nuxt_component_6;
      const _component_UInput = __nuxt_component_7;
      const _component_USelect = __nuxt_component_8;
      const _component_UTable = __nuxt_component_9;
      const _component_Live2DDisplay = __nuxt_component_10;
      _push(`<!--[-->`);
      if (!introDone.value) {
        _push(`<div class="intro-overlay" aria-hidden="true" data-v-188df99e><div class="intro-half intro-half-top" data-v-188df99e></div><div class="intro-half intro-half-bottom" data-v-188df99e></div><div class="intro-center-wrap" data-v-188df99e><div class="intro-title-wrap" data-v-188df99e><h1 class="intro-title intro-title-ghost" data-v-188df99e>詐騙偵測器</h1><h1 class="intro-title intro-title-slice intro-title-top" data-v-188df99e>詐騙偵測器</h1><h1 class="intro-title intro-title-slice intro-title-bottom" data-v-188df99e>詐騙偵測器</h1></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cyber-grid-layer" data-v-188df99e></div>`);
      _push(ssrRenderComponent(_component_UContainer, {
        class: ["py-10 relative z-10 transition-all duration-500 theme-shell shell-glow", neonMode.value ? "mode-neon" : "mode-plain", isLiteFx.value ? "fx-lite" : "fx-full"],
        style: shellStyle.value,
        onMousemove: onShellMove,
        onMouseleave: onShellLeave
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fx-particle-layer" aria-hidden="true" data-v-188df99e${_scopeId}><!--[-->`);
            ssrRenderList(bgParticles.value, (p) => {
              _push2(`<span class="fx-particle" style="${ssrRenderStyle({ left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, opacity: p.op })}" data-v-188df99e${_scopeId}></span>`);
            });
            _push2(`<!--]--></div>`);
            if (modeBurstActive.value) {
              _push2(`<div class="mode-burst" aria-hidden="true" data-v-188df99e${_scopeId}><!--[-->`);
              ssrRenderList(modeParticles.value, (p) => {
                _push2(`<span class="mode-dot" style="${ssrRenderStyle({ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}ms`, animationDelay: `${p.delay}ms`, background: `hsla(${p.hue}, 100%, 70%, .9)`, "--dx": `${p.dx}px`, "--dy": `${p.dy}px` })}" data-v-188df99e${_scopeId}></span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="title-pin-section h-screen w-full flex items-center justify-center -mt-10 mb-20 relative z-20" data-v-188df99e${_scopeId}><div class="text-center w-full max-w-4xl px-4 flex flex-col items-center" data-v-188df99e${_scopeId}><h1 class="page-title text-5xl md:text-[8rem] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-emerald-300 to-indigo-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] whitespace-nowrap" data-v-188df99e${_scopeId}> 詐騙偵測器 </h1><p class="hero-subtitle text-slate-300 mt-6 text-xl font-light tracking-widest hidden md:block" data-v-188df99e${_scopeId}> Future Security Console · AI Scam Detection </p></div></div><div class="dashboard-content max-w-6xl mx-auto z-10 relative" data-v-188df99e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up mb-6 border border-cyan-400/25 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-18px_rgba(56,189,248,0.45)]",
              style: { "--delay": ".06s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-cyan-200 tracking-wide" data-v-188df99e${_scopeId2}>單訊息檢測</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-cyan-200 tracking-wide" }, "單訊息檢測")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: text.value,
                    "onUpdate:modelValue": ($event) => text.value = $event,
                    rows: 5,
                    placeholder: "例如：恭喜中獎，請點擊連結領取獎品...",
                    class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 mt-3" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: loading.value,
                    onClick: runPredict,
                    class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 開始檢測 `);
                      } else {
                        return [
                          createTextVNode(" 開始檢測 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    onClick: ($event) => {
                      text.value = "";
                      result.value = null;
                      error.value = "";
                    },
                    class: "fx-btn bg-slate-800/80 text-slate-200"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 清空 `);
                      } else {
                        return [
                          createTextVNode(" 清空 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (loading.value) {
                    _push3(`<div class="mt-3 rounded-md border border-cyan-400/30 bg-cyan-500/5 overflow-hidden" data-v-188df99e${_scopeId2}><div class="scan-line" data-v-188df99e${_scopeId2}></div><div class="skeleton-grid px-3 pt-3 pb-1" data-v-188df99e${_scopeId2}><span class="skeleton-line w-11/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-9/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-10/12" data-v-188df99e${_scopeId2}></span></div><div class="text-xs text-cyan-200 px-3 py-2" data-v-188df99e${_scopeId2}>掃描中... AI 正在分析詐騙特徵</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex gap-2 mt-3 flex-wrap" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "gray",
                    variant: "outline",
                    class: "fx-btn border-cyan-400/35 text-cyan-200",
                    onClick: ($event) => fillSample("恭喜您中獎，請立即點擊 bit.ly 領獎")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`範例：中獎詐騙`);
                      } else {
                        return [
                          createTextVNode("範例：中獎詐騙")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "gray",
                    variant: "outline",
                    class: "fx-btn border-cyan-400/35 text-cyan-200",
                    onClick: ($event) => fillSample("您的帳戶異常，請回覆驗證碼")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`範例：帳戶驗證`);
                      } else {
                        return [
                          createTextVNode("範例：帳戶驗證")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "gray",
                    variant: "outline",
                    class: "fx-btn border-cyan-400/35 text-cyan-200",
                    onClick: ($event) => fillSample("今天晚上一起吃飯嗎？")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`範例：正常訊息`);
                      } else {
                        return [
                          createTextVNode("範例：正常訊息")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (text.value) {
                    _push3(`<div class="mt-3 rounded-md border border-sky-400/25 bg-slate-950/40 p-3" data-v-188df99e${_scopeId2}><div class="text-xs text-slate-300 mb-2" data-v-188df99e${_scopeId2}>關鍵詞命中：${ssrInterpolate(keywordHits.value.length)} `);
                    if (keywordHits.value.length) {
                      _push3(`<span data-v-188df99e${_scopeId2}>（${ssrInterpolate(keywordHits.value.join("、"))}）</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="text-sm text-slate-200 leading-7" data-v-188df99e${_scopeId2}>${highlightedHtml.value ?? ""}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (error.value) {
                    _push3(ssrRenderComponent(_component_UAlert, {
                      color: "red",
                      variant: "soft",
                      title: error.value,
                      class: "mt-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (result.value) {
                    _push3(ssrRenderComponent(_component_UCard, {
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isRiskHigh.value ? "risk-pulse border-red-400/45" : "border-cyan-400/20", riskShake.value ? "risk-shake" : "", singleSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-center mb-4" data-v-188df99e${_scopeId3}><div class="gauge-outer" style="${ssrRenderStyle(gaugeStyle.value)}" data-v-188df99e${_scopeId3}><div class="gauge-inner" data-v-188df99e${_scopeId3}><div class="text-xl font-bold text-slate-100" data-v-188df99e${_scopeId3}>${ssrInterpolate(displayGauge.value)}%</div><div class="text-[11px] text-slate-400" data-v-188df99e${_scopeId3}>風險機率</div></div></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-188df99e${_scopeId3}><div data-v-188df99e${_scopeId3}><div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>判定</div>`);
                          _push4(ssrRenderComponent(_component_UBadge, {
                            class: isRiskHigh.value ? "badge-pulse" : "",
                            color: result.value.is_scam ? "red" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(result.value.is_scam ? "詐騙" : "正常")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(result.value.is_scam ? "詐騙" : "正常"), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div data-v-188df99e${_scopeId3}><div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>詐騙機率</div><div data-v-188df99e${_scopeId3}>${ssrInterpolate(displayProbability.value.toFixed(1))}%</div></div><div data-v-188df99e${_scopeId3}><div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>風險等級</div><div data-v-188df99e${_scopeId3}>${ssrInterpolate(result.value.risk_level)}</div></div><div data-v-188df99e${_scopeId3}><div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>風險描述</div><div data-v-188df99e${_scopeId3}>${ssrInterpolate(result.value.risk_description)}</div></div></div><div class="mt-3" data-v-188df99e${_scopeId3}><div class="text-xs text-slate-300 mb-1" data-v-188df99e${_scopeId3}>風險視覺化</div>`);
                          _push4(ssrRenderComponent(_component_UProgress, { value: displayGauge.value }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="mt-3 text-slate-200" data-v-188df99e${_scopeId3}><b class="text-cyan-300" data-v-188df99e${_scopeId3}>原因：</b>${ssrInterpolate(result.value.reason || "—")}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center mb-4" }, [
                              createVNode("div", {
                                class: "gauge-outer",
                                style: gaugeStyle.value
                              }, [
                                createVNode("div", { class: "gauge-inner" }, [
                                  createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(displayGauge.value) + "%", 1),
                                  createVNode("div", { class: "text-[11px] text-slate-400" }, "風險機率")
                                ])
                              ], 4)
                            ]),
                            createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-xs text-gray-400" }, "判定"),
                                createVNode(_component_UBadge, {
                                  class: isRiskHigh.value ? "badge-pulse" : "",
                                  color: result.value.is_scam ? "red" : "green",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(result.value.is_scam ? "詐騙" : "正常"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["class", "color"])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-xs text-gray-400" }, "詐騙機率"),
                                createVNode("div", null, toDisplayString(displayProbability.value.toFixed(1)) + "%", 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-xs text-gray-400" }, "風險等級"),
                                createVNode("div", null, toDisplayString(result.value.risk_level), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-xs text-gray-400" }, "風險描述"),
                                createVNode("div", null, toDisplayString(result.value.risk_description), 1)
                              ])
                            ]),
                            createVNode("div", { class: "mt-3" }, [
                              createVNode("div", { class: "text-xs text-slate-300 mb-1" }, "風險視覺化"),
                              createVNode(_component_UProgress, { value: displayGauge.value }, null, 8, ["value"])
                            ]),
                            createVNode("div", { class: "mt-3 text-slate-200" }, [
                              createVNode("b", { class: "text-cyan-300" }, "原因："),
                              createTextVNode(toDisplayString(result.value.reason || "—"), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: text.value,
                      "onUpdate:modelValue": ($event) => text.value = $event,
                      rows: 5,
                      placeholder: "例如：恭喜中獎，請點擊連結領取獎品...",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-2 mt-3" }, [
                      createVNode(_component_UButton, {
                        loading: loading.value,
                        onClick: runPredict,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 開始檢測 ")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        onClick: ($event) => {
                          text.value = "";
                          result.value = null;
                          error.value = "";
                        },
                        class: "fx-btn bg-slate-800/80 text-slate-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 清空 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-cyan-400/30 bg-cyan-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-11/12" }),
                        createVNode("span", { class: "skeleton-line w-9/12" }),
                        createVNode("span", { class: "skeleton-line w-10/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-cyan-200 px-3 py-2" }, "掃描中... AI 正在分析詐騙特徵")
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex gap-2 mt-3 flex-wrap" }, [
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("恭喜您中獎，請立即點擊 bit.ly 領獎")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：中獎詐騙")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("您的帳戶異常，請回覆驗證碼")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：帳戶驗證")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("今天晚上一起吃飯嗎？")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：正常訊息")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    text.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-3 rounded-md border border-sky-400/25 bg-slate-950/40 p-3"
                    }, [
                      createVNode("div", { class: "text-xs text-slate-300 mb-2" }, [
                        createTextVNode("關鍵詞命中：" + toDisplayString(keywordHits.value.length) + " ", 1),
                        keywordHits.value.length ? (openBlock(), createBlock("span", { key: 0 }, "（" + toDisplayString(keywordHits.value.join("、")) + "）", 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", {
                        class: "text-sm text-slate-200 leading-7",
                        innerHTML: highlightedHtml.value
                      }, null, 8, ["innerHTML"])
                    ])) : createCommentVNode("", true),
                    error.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 2,
                      color: "red",
                      variant: "soft",
                      title: error.value,
                      class: "mt-4"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    result.value ? (openBlock(), createBlock(_component_UCard, {
                      key: 3,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isRiskHigh.value ? "risk-pulse border-red-400/45" : "border-cyan-400/20", riskShake.value ? "risk-shake" : "", singleSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-4" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: gaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(displayGauge.value) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "風險機率")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "判定"),
                            createVNode(_component_UBadge, {
                              class: isRiskHigh.value ? "badge-pulse" : "",
                              color: result.value.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(result.value.is_scam ? "詐騙" : "正常"), 1)
                              ]),
                              _: 1
                            }, 8, ["class", "color"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "詐騙機率"),
                            createVNode("div", null, toDisplayString(displayProbability.value.toFixed(1)) + "%", 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "風險等級"),
                            createVNode("div", null, toDisplayString(result.value.risk_level), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "風險描述"),
                            createVNode("div", null, toDisplayString(result.value.risk_description), 1)
                          ])
                        ]),
                        createVNode("div", { class: "mt-3" }, [
                          createVNode("div", { class: "text-xs text-slate-300 mb-1" }, "風險視覺化"),
                          createVNode(_component_UProgress, { value: displayGauge.value }, null, 8, ["value"])
                        ]),
                        createVNode("div", { class: "mt-3 text-slate-200" }, [
                          createVNode("b", { class: "text-cyan-300" }, "原因："),
                          createTextVNode(toDisplayString(result.value.reason || "—"), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up mb-6 border border-amber-400/20 bg-slate-900/70 backdrop-blur-xl",
              style: { "--delay": ".1s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-amber-200 tracking-wide" data-v-188df99e${_scopeId2}>網址即時掃描</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-amber-200 tracking-wide" }, "網址即時掃描")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2 items-center" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: urlInput.value,
                    "onUpdate:modelValue": ($event) => urlInput.value = $event,
                    placeholder: "貼上網址，例如 bit.ly/xxxx 或可疑登入頁面",
                    class: "flex-1"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: urlLoading.value,
                    class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                    onClick: runUrlScan
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`掃描網址`);
                      } else {
                        return [
                          createTextVNode("掃描網址")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    class: "fx-btn bg-slate-800/80 text-slate-200",
                    onClick: ($event) => urlInput.value = "www.google.com"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`安全測試`);
                      } else {
                        return [
                          createTextVNode("安全測試")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (urlLoading.value) {
                    _push3(`<div class="mt-3 rounded-md border border-amber-400/30 bg-amber-500/5 overflow-hidden" data-v-188df99e${_scopeId2}><div class="scan-line" data-v-188df99e${_scopeId2}></div><div class="skeleton-grid px-3 pt-3 pb-1" data-v-188df99e${_scopeId2}><span class="skeleton-line w-11/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-9/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-10/12" data-v-188df99e${_scopeId2}></span></div><div class="text-xs text-amber-200 px-3 py-2" data-v-188df99e${_scopeId2}>網址分析中... 正在檢查跳轉與假登入特徵</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (urlError.value) {
                    _push3(ssrRenderComponent(_component_UAlert, {
                      color: "red",
                      variant: "soft",
                      title: urlError.value,
                      class: "mt-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (urlResult.value) {
                    _push3(ssrRenderComponent(_component_UCard, {
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isUrlRiskHigh.value ? "risk-pulse border-red-400/45" : "border-amber-400/25", urlSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-center mb-2" data-v-188df99e${_scopeId3}><div class="gauge-outer" style="${ssrRenderStyle(urlGaugeStyle.value)}" data-v-188df99e${_scopeId3}><div class="gauge-inner" data-v-188df99e${_scopeId3}><div class="text-xl font-bold text-slate-100" data-v-188df99e${_scopeId3}>${ssrInterpolate(Math.round(urlResult.value.safety_score || 0))}%</div><div class="text-[11px] text-slate-400" data-v-188df99e${_scopeId3}>URL 安全分數</div></div></div></div><div class="text-slate-200" data-v-188df99e${_scopeId3}>主網域：<span class="text-amber-200" data-v-188df99e${_scopeId3}>${ssrInterpolate(urlResult.value.host)}</span></div><div class="text-slate-200" data-v-188df99e${_scopeId3}>最終網址：<span class="text-slate-300 break-all" data-v-188df99e${_scopeId3}>${ssrInterpolate(urlResult.value.final_url)}</span></div><div class="flex items-center gap-2" data-v-188df99e${_scopeId3}><span class="text-slate-300" data-v-188df99e${_scopeId3}>風險評分：${ssrInterpolate(urlResult.value.risk_score)}/100</span><span class="text-slate-300" data-v-188df99e${_scopeId3}>安全分數：${ssrInterpolate(urlResult.value.safety_score)}/100</span>`);
                          _push4(ssrRenderComponent(_component_UBadge, {
                            color: urlResult.value.risk_level === "HIGH" ? "red" : urlResult.value.risk_level === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(urlResult.value.risk_level)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(urlResult.value.risk_level), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (urlResult.value.redirected) {
                            _push4(ssrRenderComponent(_component_UBadge, {
                              color: "orange",
                              variant: "soft"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`偵測到跳轉`);
                                } else {
                                  return [
                                    createTextVNode("偵測到跳轉")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (urlResult.value.is_whitelisted) {
                            _push4(ssrRenderComponent(_component_UBadge, {
                              color: "emerald",
                              variant: "soft"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`白名單安全`);
                                } else {
                                  return [
                                    createTextVNode("白名單安全")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_UProgress, {
                            value: Math.round(urlResult.value.safety_score || 0),
                            color: "emerald"
                          }, null, _parent4, _scopeId3));
                          if (urlResult.value.findings?.length) {
                            _push4(`<div class="text-slate-200" data-v-188df99e${_scopeId3}><div class="text-xs text-slate-400 mb-1" data-v-188df99e${_scopeId3}>可疑特徵：</div><ul class="list-disc pl-5 space-y-1" data-v-188df99e${_scopeId3}><!--[-->`);
                            ssrRenderList(urlResult.value.findings, (f, i) => {
                              _push4(`<li data-v-188df99e${_scopeId3}>${ssrInterpolate(f)}</li>`);
                            });
                            _push4(`<!--]--></ul></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center mb-2" }, [
                              createVNode("div", {
                                class: "gauge-outer",
                                style: urlGaugeStyle.value
                              }, [
                                createVNode("div", { class: "gauge-inner" }, [
                                  createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(urlResult.value.safety_score || 0)) + "%", 1),
                                  createVNode("div", { class: "text-[11px] text-slate-400" }, "URL 安全分數")
                                ])
                              ], 4)
                            ]),
                            createVNode("div", { class: "text-slate-200" }, [
                              createTextVNode("主網域："),
                              createVNode("span", { class: "text-amber-200" }, toDisplayString(urlResult.value.host), 1)
                            ]),
                            createVNode("div", { class: "text-slate-200" }, [
                              createTextVNode("最終網址："),
                              createVNode("span", { class: "text-slate-300 break-all" }, toDisplayString(urlResult.value.final_url), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-slate-300" }, "風險評分：" + toDisplayString(urlResult.value.risk_score) + "/100", 1),
                              createVNode("span", { class: "text-slate-300" }, "安全分數：" + toDisplayString(urlResult.value.safety_score) + "/100", 1),
                              createVNode(_component_UBadge, {
                                color: urlResult.value.risk_level === "HIGH" ? "red" : urlResult.value.risk_level === "MEDIUM" ? "yellow" : "green",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(urlResult.value.risk_level), 1)
                                ]),
                                _: 1
                              }, 8, ["color"]),
                              urlResult.value.redirected ? (openBlock(), createBlock(_component_UBadge, {
                                key: 0,
                                color: "orange",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("偵測到跳轉")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              urlResult.value.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                                key: 1,
                                color: "emerald",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("白名單安全")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_UProgress, {
                              value: Math.round(urlResult.value.safety_score || 0),
                              color: "emerald"
                            }, null, 8, ["value"]),
                            urlResult.value.findings?.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-slate-200"
                            }, [
                              createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "可疑特徵："),
                              createVNode("ul", { class: "list-disc pl-5 space-y-1" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(urlResult.value.findings, (f, i) => {
                                  return openBlock(), createBlock("li", {
                                    key: `url-f-${i}`
                                  }, toDisplayString(f), 1);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode(_component_UInput, {
                        modelValue: urlInput.value,
                        "onUpdate:modelValue": ($event) => urlInput.value = $event,
                        placeholder: "貼上網址，例如 bit.ly/xxxx 或可疑登入頁面",
                        class: "flex-1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UButton, {
                        loading: urlLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: runUrlScan
                      }, {
                        default: withCtx(() => [
                          createTextVNode("掃描網址")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => urlInput.value = "www.google.com"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("安全測試")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    urlLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-amber-400/30 bg-amber-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-11/12" }),
                        createVNode("span", { class: "skeleton-line w-9/12" }),
                        createVNode("span", { class: "skeleton-line w-10/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-amber-200 px-3 py-2" }, "網址分析中... 正在檢查跳轉與假登入特徵")
                    ])) : createCommentVNode("", true),
                    urlError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: urlError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    urlResult.value ? (openBlock(), createBlock(_component_UCard, {
                      key: 2,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isUrlRiskHigh.value ? "risk-pulse border-red-400/45" : "border-amber-400/25", urlSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-2" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: urlGaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(urlResult.value.safety_score || 0)) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "URL 安全分數")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "text-slate-200" }, [
                          createTextVNode("主網域："),
                          createVNode("span", { class: "text-amber-200" }, toDisplayString(urlResult.value.host), 1)
                        ]),
                        createVNode("div", { class: "text-slate-200" }, [
                          createTextVNode("最終網址："),
                          createVNode("span", { class: "text-slate-300 break-all" }, toDisplayString(urlResult.value.final_url), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "text-slate-300" }, "風險評分：" + toDisplayString(urlResult.value.risk_score) + "/100", 1),
                          createVNode("span", { class: "text-slate-300" }, "安全分數：" + toDisplayString(urlResult.value.safety_score) + "/100", 1),
                          createVNode(_component_UBadge, {
                            color: urlResult.value.risk_level === "HIGH" ? "red" : urlResult.value.risk_level === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(urlResult.value.risk_level), 1)
                            ]),
                            _: 1
                          }, 8, ["color"]),
                          urlResult.value.redirected ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            color: "orange",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("偵測到跳轉")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          urlResult.value.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                            key: 1,
                            color: "emerald",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("白名單安全")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_UProgress, {
                          value: Math.round(urlResult.value.safety_score || 0),
                          color: "emerald"
                        }, null, 8, ["value"]),
                        urlResult.value.findings?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-slate-200"
                        }, [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "可疑特徵："),
                          createVNode("ul", { class: "list-disc pl-5 space-y-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(urlResult.value.findings, (f, i) => {
                              return openBlock(), createBlock("li", {
                                key: `url-f-${i}`
                              }, toDisplayString(f), 1);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up mb-6 border border-fuchsia-400/20 bg-slate-900/70 backdrop-blur-xl",
              style: { "--delay": ".14s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-fuchsia-200 tracking-wide" data-v-188df99e${_scopeId2}>截圖辨識（OCR）</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-fuchsia-200 tracking-wide" }, "截圖辨識（OCR）")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input type="file" accept="image/*" class="hidden" data-v-188df99e${_scopeId2}><div class="flex items-center gap-2 flex-wrap" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: ocrLoading.value,
                    class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                    onClick: openOcrPicker
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`上傳截圖辨識`);
                      } else {
                        return [
                          createTextVNode("上傳截圖辨識")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    class: "fx-btn bg-slate-800/80 text-slate-200",
                    onClick: ($event) => {
                      ocrResult.value = null;
                      ocrError.value = "";
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`清空結果`);
                      } else {
                        return [
                          createTextVNode("清空結果")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-xs text-slate-400" data-v-188df99e${_scopeId2}>上傳聊天截圖後，系統會自動擷取文字並做風險分析 + AI 建議</div></div>`);
                  if (ocrLoading.value) {
                    _push3(`<div class="mt-3 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/5 overflow-hidden" data-v-188df99e${_scopeId2}><div class="scan-line" data-v-188df99e${_scopeId2}></div><div class="text-xs text-fuchsia-200 px-3 py-2" data-v-188df99e${_scopeId2}>OCR 辨識中... 請稍候</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (ocrError.value) {
                    _push3(ssrRenderComponent(_component_UAlert, {
                      color: "red",
                      variant: "soft",
                      title: ocrError.value,
                      class: "mt-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (ocrResult.value) {
                    _push3(`<div class="mt-4 grid gap-3" data-v-188df99e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/60 border border-fuchsia-400/25" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-slate-400 mb-1" data-v-188df99e${_scopeId3}>OCR 文字</div><div class="text-sm text-slate-200 whitespace-pre-wrap" data-v-188df99e${_scopeId3}>${ssrInterpolate(ocrResult.value.text || "（未擷取到文字）")}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "OCR 文字"),
                            createVNode("div", { class: "text-sm text-slate-200 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.text || "（未擷取到文字）"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (ocrResult.value.predict) {
                      _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/60 border border-fuchsia-400/25" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="text-xs text-slate-400 mb-1" data-v-188df99e${_scopeId3}>模型判定</div><div class="flex items-center gap-2 text-slate-200" data-v-188df99e${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UBadge, {
                              color: ocrResult.value.predict.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(ocrResult.value.predict.is_scam ? "詐騙" : "正常")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(ocrResult.value.predict.is_scam ? "詐騙" : "正常"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<span data-v-188df99e${_scopeId3}>機率 ${ssrInterpolate((ocrResult.value.predict.probability * 100).toFixed(1))}%</span><span class="text-slate-400" data-v-188df99e${_scopeId3}>${ssrInterpolate(ocrResult.value.predict.risk_level)} / ${ssrInterpolate(ocrResult.value.predict.risk_description)}</span></div><div class="mt-2 text-sm text-slate-300" data-v-188df99e${_scopeId3}>${ssrInterpolate(ocrResult.value.predict.reason)}</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "模型判定"),
                              createVNode("div", { class: "flex items-center gap-2 text-slate-200" }, [
                                createVNode(_component_UBadge, {
                                  color: ocrResult.value.predict.is_scam ? "red" : "green",
                                  variant: "soft"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(ocrResult.value.predict.is_scam ? "詐騙" : "正常"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"]),
                                createVNode("span", null, "機率 " + toDisplayString((ocrResult.value.predict.probability * 100).toFixed(1)) + "%", 1),
                                createVNode("span", { class: "text-slate-400" }, toDisplayString(ocrResult.value.predict.risk_level) + " / " + toDisplayString(ocrResult.value.predict.risk_description), 1)
                              ]),
                              createVNode("div", { class: "mt-2 text-sm text-slate-300" }, toDisplayString(ocrResult.value.predict.reason), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/60 border border-cyan-400/25" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-slate-400 mb-1" data-v-188df99e${_scopeId3}>AI 建議</div><div class="text-sm text-slate-100 whitespace-pre-wrap" data-v-188df99e${_scopeId3}>${ssrInterpolate(ocrResult.value.ai_answer)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "AI 建議"),
                            createVNode("div", { class: "text-sm text-slate-100 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.ai_answer), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("input", {
                      ref_key: "ocrInputRef",
                      ref: ocrInputRef,
                      type: "file",
                      accept: "image/*",
                      class: "hidden",
                      onChange: onOcrUpload
                    }, null, 544),
                    createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                      createVNode(_component_UButton, {
                        loading: ocrLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: openOcrPicker
                      }, {
                        default: withCtx(() => [
                          createTextVNode("上傳截圖辨識")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => {
                          ocrResult.value = null;
                          ocrError.value = "";
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空結果")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", { class: "text-xs text-slate-400" }, "上傳聊天截圖後，系統會自動擷取文字並做風險分析 + AI 建議")
                    ]),
                    ocrLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "text-xs text-fuchsia-200 px-3 py-2" }, "OCR 辨識中... 請稍候")
                    ])) : createCommentVNode("", true),
                    ocrError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: ocrError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    ocrResult.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mt-4 grid gap-3"
                    }, [
                      createVNode(_component_UCard, { class: "bg-slate-950/60 border border-fuchsia-400/25" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "OCR 文字"),
                          createVNode("div", { class: "text-sm text-slate-200 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.text || "（未擷取到文字）"), 1)
                        ]),
                        _: 1
                      }),
                      ocrResult.value.predict ? (openBlock(), createBlock(_component_UCard, {
                        key: 0,
                        class: "bg-slate-950/60 border border-fuchsia-400/25"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "模型判定"),
                          createVNode("div", { class: "flex items-center gap-2 text-slate-200" }, [
                            createVNode(_component_UBadge, {
                              color: ocrResult.value.predict.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ocrResult.value.predict.is_scam ? "詐騙" : "正常"), 1)
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createVNode("span", null, "機率 " + toDisplayString((ocrResult.value.predict.probability * 100).toFixed(1)) + "%", 1),
                            createVNode("span", { class: "text-slate-400" }, toDisplayString(ocrResult.value.predict.risk_level) + " / " + toDisplayString(ocrResult.value.predict.risk_description), 1)
                          ]),
                          createVNode("div", { class: "mt-2 text-sm text-slate-300" }, toDisplayString(ocrResult.value.predict.reason), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UCard, { class: "bg-slate-950/60 border border-cyan-400/25" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "AI 建議"),
                          createVNode("div", { class: "text-sm text-slate-100 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.ai_answer), 1)
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up mb-6 border border-emerald-400/20 bg-slate-900/70 backdrop-blur-xl",
              style: { "--delay": ".16s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-emerald-200 tracking-wide" data-v-188df99e${_scopeId2}>電話辨識</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-emerald-200 tracking-wide" }, "電話辨識")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: phoneInput.value,
                    "onUpdate:modelValue": ($event) => phoneInput.value = $event,
                    rows: 3,
                    placeholder: "貼上訊息內容（留空則自動用上方單訊息/OCR 文字）",
                    class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-emerald-400/30 [&>textarea]:focus:border-emerald-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-3 flex gap-2" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: phoneLoading.value,
                    class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                    onClick: runPhoneDetect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`辨識電話`);
                      } else {
                        return [
                          createTextVNode("辨識電話")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    class: "fx-btn bg-slate-800/80 text-slate-200",
                    onClick: ($event) => phoneInput.value = "0912345678"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`安全測試`);
                      } else {
                        return [
                          createTextVNode("安全測試")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    class: "fx-btn bg-slate-800/80 text-slate-200",
                    onClick: ($event) => {
                      phoneInput.value = "";
                      phoneMatches.value = [];
                      phoneError.value = "";
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`清空`);
                      } else {
                        return [
                          createTextVNode("清空")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (phoneLoading.value) {
                    _push3(`<div class="mt-3 rounded-md border border-emerald-400/30 bg-emerald-500/5 overflow-hidden" data-v-188df99e${_scopeId2}><div class="scan-line" data-v-188df99e${_scopeId2}></div><div class="skeleton-grid px-3 pt-3 pb-1" data-v-188df99e${_scopeId2}><span class="skeleton-line w-10/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-8/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-11/12" data-v-188df99e${_scopeId2}></span></div><div class="text-xs text-emerald-200 px-3 py-2" data-v-188df99e${_scopeId2}>電話辨識中... 正在分析號碼風險特徵</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (phoneError.value) {
                    _push3(ssrRenderComponent(_component_UAlert, {
                      color: "red",
                      variant: "soft",
                      title: phoneError.value,
                      class: "mt-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (phoneMatches.value.length) {
                    _push3(ssrRenderComponent(_component_UCard, {
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isPhoneRiskHigh.value ? "risk-pulse border-red-400/45" : "border-emerald-400/25", phoneSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-center mb-2" data-v-188df99e${_scopeId3}><div class="gauge-outer" style="${ssrRenderStyle(phoneGaugeStyle.value)}" data-v-188df99e${_scopeId3}><div class="gauge-inner" data-v-188df99e${_scopeId3}><div class="text-xl font-bold text-slate-100" data-v-188df99e${_scopeId3}>${ssrInterpolate(Math.round(phoneDashboard.value.safetyScore))}%</div><div class="text-[11px] text-slate-400" data-v-188df99e${_scopeId3}>電話安全分數</div></div></div></div><div class="flex items-center gap-2 text-sm text-slate-300" data-v-188df99e${_scopeId3}><span data-v-188df99e${_scopeId3}>風險評分：${ssrInterpolate(phoneDashboard.value.riskScore.toFixed(1))}/100</span><span data-v-188df99e${_scopeId3}>安全分數：${ssrInterpolate(phoneDashboard.value.safetyScore.toFixed(1))}/100</span>`);
                          _push4(ssrRenderComponent(_component_UBadge, {
                            color: phoneDashboard.value.riskLevel === "HIGH" ? "red" : phoneDashboard.value.riskLevel === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(phoneDashboard.value.riskLevel)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(phoneDashboard.value.riskLevel), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_UProgress, {
                            value: Math.round(phoneDashboard.value.safetyScore),
                            color: "emerald",
                            class: "mb-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(phoneMatches.value, (m, i) => {
                            _push4(ssrRenderComponent(_component_UCard, {
                              key: `pm-${i}`,
                              class: "bg-slate-950/60 border border-emerald-400/20"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center justify-between gap-2 text-sm" data-v-188df99e${_scopeId4}><div class="text-slate-100" data-v-188df99e${_scopeId4}>${ssrInterpolate(m.raw)}</div><div class="flex items-center gap-2" data-v-188df99e${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_UBadge, {
                                    color: "emerald",
                                    variant: "soft"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(m.type)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(m.type), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UBadge, {
                                    color: m.risk_level === "HIGH" ? "red" : m.risk_level === "MEDIUM" ? "yellow" : "green",
                                    variant: "soft"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(m.risk_level)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(m.risk_level), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (m.is_whitelisted) {
                                    _push5(ssrRenderComponent(_component_UBadge, {
                                      color: "emerald",
                                      variant: "soft"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`白名單安全`);
                                        } else {
                                          return [
                                            createTextVNode("白名單安全")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div></div><div class="text-xs text-slate-400 mt-1" data-v-188df99e${_scopeId4}>標準化：${ssrInterpolate(m.normalized)}</div><div class="text-xs text-slate-400 mt-1" data-v-188df99e${_scopeId4}>安全分數：${ssrInterpolate(m.safety_score)}/100｜風險評分：${ssrInterpolate(m.risk_score)}/100</div><div class="text-xs text-slate-300 mt-1" data-v-188df99e${_scopeId4}>${ssrInterpolate(m.reason)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center justify-between gap-2 text-sm" }, [
                                      createVNode("div", { class: "text-slate-100" }, toDisplayString(m.raw), 1),
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(_component_UBadge, {
                                          color: "emerald",
                                          variant: "soft"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(m.type), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UBadge, {
                                          color: m.risk_level === "HIGH" ? "red" : m.risk_level === "MEDIUM" ? "yellow" : "green",
                                          variant: "soft"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(m.risk_level), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        m.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                                          key: 0,
                                          color: "emerald",
                                          variant: "soft"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("白名單安全")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "標準化：" + toDisplayString(m.normalized), 1),
                                    createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "安全分數：" + toDisplayString(m.safety_score) + "/100｜風險評分：" + toDisplayString(m.risk_score) + "/100", 1),
                                    createVNode("div", { class: "text-xs text-slate-300 mt-1" }, toDisplayString(m.reason), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-center mb-2" }, [
                              createVNode("div", {
                                class: "gauge-outer",
                                style: phoneGaugeStyle.value
                              }, [
                                createVNode("div", { class: "gauge-inner" }, [
                                  createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(phoneDashboard.value.safetyScore)) + "%", 1),
                                  createVNode("div", { class: "text-[11px] text-slate-400" }, "電話安全分數")
                                ])
                              ], 4)
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-sm text-slate-300" }, [
                              createVNode("span", null, "風險評分：" + toDisplayString(phoneDashboard.value.riskScore.toFixed(1)) + "/100", 1),
                              createVNode("span", null, "安全分數：" + toDisplayString(phoneDashboard.value.safetyScore.toFixed(1)) + "/100", 1),
                              createVNode(_component_UBadge, {
                                color: phoneDashboard.value.riskLevel === "HIGH" ? "red" : phoneDashboard.value.riskLevel === "MEDIUM" ? "yellow" : "green",
                                variant: "soft"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(phoneDashboard.value.riskLevel), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ]),
                            createVNode(_component_UProgress, {
                              value: Math.round(phoneDashboard.value.safetyScore),
                              color: "emerald",
                              class: "mb-2"
                            }, null, 8, ["value"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(phoneMatches.value, (m, i) => {
                              return openBlock(), createBlock(_component_UCard, {
                                key: `pm-${i}`,
                                class: "bg-slate-950/60 border border-emerald-400/20"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center justify-between gap-2 text-sm" }, [
                                    createVNode("div", { class: "text-slate-100" }, toDisplayString(m.raw), 1),
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_UBadge, {
                                        color: "emerald",
                                        variant: "soft"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.type), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UBadge, {
                                        color: m.risk_level === "HIGH" ? "red" : m.risk_level === "MEDIUM" ? "yellow" : "green",
                                        variant: "soft"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.risk_level), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      m.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                                        key: 0,
                                        color: "emerald",
                                        variant: "soft"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("白名單安全")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "標準化：" + toDisplayString(m.normalized), 1),
                                  createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "安全分數：" + toDisplayString(m.safety_score) + "/100｜風險評分：" + toDisplayString(m.risk_score) + "/100", 1),
                                  createVNode("div", { class: "text-xs text-slate-300 mt-1" }, toDisplayString(m.reason), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else if (!phoneLoading.value) {
                    _push3(`<div class="mt-3 text-sm text-slate-400" data-v-188df99e${_scopeId2}>尚未辨識到電話號碼</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: phoneInput.value,
                      "onUpdate:modelValue": ($event) => phoneInput.value = $event,
                      rows: 3,
                      placeholder: "貼上訊息內容（留空則自動用上方單訊息/OCR 文字）",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-emerald-400/30 [&>textarea]:focus:border-emerald-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-3 flex gap-2" }, [
                      createVNode(_component_UButton, {
                        loading: phoneLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: runPhoneDetect
                      }, {
                        default: withCtx(() => [
                          createTextVNode("辨識電話")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => phoneInput.value = "0912345678"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("安全測試")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => {
                          phoneInput.value = "";
                          phoneMatches.value = [];
                          phoneError.value = "";
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    phoneLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-emerald-400/30 bg-emerald-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-10/12" }),
                        createVNode("span", { class: "skeleton-line w-8/12" }),
                        createVNode("span", { class: "skeleton-line w-11/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-emerald-200 px-3 py-2" }, "電話辨識中... 正在分析號碼風險特徵")
                    ])) : createCommentVNode("", true),
                    phoneError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: phoneError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    phoneMatches.value.length ? (openBlock(), createBlock(_component_UCard, {
                      key: 2,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isPhoneRiskHigh.value ? "risk-pulse border-red-400/45" : "border-emerald-400/25", phoneSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-2" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: phoneGaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(phoneDashboard.value.safetyScore)) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "電話安全分數")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 text-sm text-slate-300" }, [
                          createVNode("span", null, "風險評分：" + toDisplayString(phoneDashboard.value.riskScore.toFixed(1)) + "/100", 1),
                          createVNode("span", null, "安全分數：" + toDisplayString(phoneDashboard.value.safetyScore.toFixed(1)) + "/100", 1),
                          createVNode(_component_UBadge, {
                            color: phoneDashboard.value.riskLevel === "HIGH" ? "red" : phoneDashboard.value.riskLevel === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(phoneDashboard.value.riskLevel), 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        createVNode(_component_UProgress, {
                          value: Math.round(phoneDashboard.value.safetyScore),
                          color: "emerald",
                          class: "mb-2"
                        }, null, 8, ["value"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(phoneMatches.value, (m, i) => {
                          return openBlock(), createBlock(_component_UCard, {
                            key: `pm-${i}`,
                            class: "bg-slate-950/60 border border-emerald-400/20"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between gap-2 text-sm" }, [
                                createVNode("div", { class: "text-slate-100" }, toDisplayString(m.raw), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_UBadge, {
                                    color: "emerald",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UBadge, {
                                    color: m.risk_level === "HIGH" ? "red" : m.risk_level === "MEDIUM" ? "yellow" : "green",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.risk_level), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  m.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                                    key: 0,
                                    color: "emerald",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("白名單安全")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "標準化：" + toDisplayString(m.normalized), 1),
                              createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "安全分數：" + toDisplayString(m.safety_score) + "/100｜風險評分：" + toDisplayString(m.risk_score) + "/100", 1),
                              createVNode("div", { class: "text-xs text-slate-300 mt-1" }, toDisplayString(m.reason), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : !phoneLoading.value ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "mt-3 text-sm text-slate-400"
                    }, "尚未辨識到電話號碼")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up mb-6 border border-slate-500/25 bg-slate-900/60 backdrop-blur-xl",
              style: { "--delay": ".12s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-slate-200 tracking-wide" data-v-188df99e${_scopeId2}>最近檢測紀錄</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-slate-200 tracking-wide" }, "最近檢測紀錄")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!historyItems.value.length) {
                    _push3(`<div class="text-sm text-slate-400" data-v-188df99e${_scopeId2}>尚無紀錄</div>`);
                  } else {
                    _push3(`<div class="space-y-2 max-h-56 overflow-auto pr-1" data-v-188df99e${_scopeId2}><!--[-->`);
                    ssrRenderList(historyItems.value, (item, idx) => {
                      _push3(`<button class="w-full text-left rounded-md border border-slate-700/80 bg-slate-950/50 hover:bg-slate-800/70 p-2 transition" data-v-188df99e${_scopeId2}><div class="flex items-center justify-between text-xs" data-v-188df99e${_scopeId2}><span class="${ssrRenderClass(item.is_scam ? "text-red-300" : "text-emerald-300")}" data-v-188df99e${_scopeId2}>${ssrInterpolate(item.is_scam ? "詐騙" : "正常")}</span><span class="text-slate-400" data-v-188df99e${_scopeId2}>${ssrInterpolate(new Date(item.ts).toLocaleString())}</span></div><div class="text-slate-200 text-sm truncate mt-1" data-v-188df99e${_scopeId2}>${ssrInterpolate(item.text)}</div><div class="text-slate-400 text-xs mt-1" data-v-188df99e${_scopeId2}>機率：${ssrInterpolate((item.probability * 100).toFixed(1))}%</div></button>`);
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    !historyItems.value.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-slate-400"
                    }, "尚無紀錄")) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-2 max-h-56 overflow-auto pr-1"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(historyItems.value, (item, idx) => {
                        return openBlock(), createBlock("button", {
                          key: idx,
                          class: "w-full text-left rounded-md border border-slate-700/80 bg-slate-950/50 hover:bg-slate-800/70 p-2 transition",
                          onClick: ($event) => useHistoryItem(item)
                        }, [
                          createVNode("div", { class: "flex items-center justify-between text-xs" }, [
                            createVNode("span", {
                              class: item.is_scam ? "text-red-300" : "text-emerald-300"
                            }, toDisplayString(item.is_scam ? "詐騙" : "正常"), 3),
                            createVNode("span", { class: "text-slate-400" }, toDisplayString(new Date(item.ts).toLocaleString()), 1)
                          ]),
                          createVNode("div", { class: "text-slate-200 text-sm truncate mt-1" }, toDisplayString(item.text), 1),
                          createVNode("div", { class: "text-slate-400 text-xs mt-1" }, "機率：" + toDisplayString((item.probability * 100).toFixed(1)) + "%", 1)
                        ], 8, ["onClick"]);
                      }), 128))
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              class: "f-card shimmer-card enter-up border border-indigo-400/20 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-20px_rgba(99,102,241,0.45)]",
              style: { "--delay": ".18s" }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-semibold text-indigo-200 tracking-wide" data-v-188df99e${_scopeId2}>批量檢測（每行一筆）</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-semibold text-indigo-200 tracking-wide" }, "批量檢測（每行一筆）")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: batchText.value,
                    "onUpdate:modelValue": ($event) => batchText.value = $event,
                    rows: 6,
                    placeholder: "第一筆訊息\n第二筆訊息\n第三筆訊息",
                    class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-indigo-400/30 [&>textarea]:focus:border-indigo-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 mt-3 flex-wrap items-center" data-v-188df99e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: batchLoading.value,
                    onClick: runBatch,
                    class: "fx-btn primary-btn bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 border-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`批量檢測`);
                      } else {
                        return [
                          createTextVNode("批量檢測")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    onClick: ($event) => {
                      batchText.value = "";
                      batchResults.value = [];
                      batchError.value = "";
                    },
                    class: "fx-btn bg-slate-800/80 text-slate-200"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`清空`);
                      } else {
                        return [
                          createTextVNode("清空")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "emerald",
                    variant: "soft",
                    disabled: !batchResults.value.length,
                    onClick: downloadCsv,
                    class: "fx-btn bg-emerald-500/20 text-emerald-200"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`下載 CSV`);
                      } else {
                        return [
                          createTextVNode("下載 CSV")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: batchFilter.value,
                    "onUpdate:modelValue": ($event) => batchFilter.value = $event,
                    options: [{ label: "全部", value: "all" }, { label: "只看詐騙", value: "scam" }, { label: "只看正常", value: "normal" }],
                    "option-attribute": "label",
                    "value-attribute": "value",
                    class: "w-36"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (batchLoading.value) {
                    _push3(`<div class="mt-3 rounded-md border border-indigo-400/30 bg-indigo-500/5 overflow-hidden" data-v-188df99e${_scopeId2}><div class="scan-line indigo" data-v-188df99e${_scopeId2}></div><div class="skeleton-grid px-3 pt-3 pb-1" data-v-188df99e${_scopeId2}><span class="skeleton-line w-10/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-8/12" data-v-188df99e${_scopeId2}></span><span class="skeleton-line w-11/12" data-v-188df99e${_scopeId2}></span></div><div class="text-xs text-indigo-200 px-3 py-2" data-v-188df99e${_scopeId2}>批次掃描中... 請稍候</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (batchError.value) {
                    _push3(ssrRenderComponent(_component_UAlert, {
                      color: "red",
                      variant: "soft",
                      title: batchError.value,
                      class: "mt-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (batchResults.value.length) {
                    _push3(`<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4" data-v-188df99e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/50 border border-slate-700" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>總筆數</div><div class="text-lg text-slate-200" data-v-188df99e${_scopeId3}>${ssrInterpolate(displayStats.value.total)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-gray-400" }, "總筆數"),
                            createVNode("div", { class: "text-lg text-slate-200" }, toDisplayString(displayStats.value.total), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/50 border border-red-400/30" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>詐騙</div><div class="text-lg text-red-300" data-v-188df99e${_scopeId3}>${ssrInterpolate(displayStats.value.scam)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-gray-400" }, "詐騙"),
                            createVNode("div", { class: "text-lg text-red-300" }, toDisplayString(displayStats.value.scam), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/50 border border-emerald-400/30" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>正常</div><div class="text-lg text-emerald-300" data-v-188df99e${_scopeId3}>${ssrInterpolate(displayStats.value.normal)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-gray-400" }, "正常"),
                            createVNode("div", { class: "text-lg text-emerald-300" }, toDisplayString(displayStats.value.normal), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UCard, { class: "bg-slate-950/50 border border-indigo-400/30" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs text-gray-400" data-v-188df99e${_scopeId3}>詐騙率</div><div class="text-lg text-indigo-200" data-v-188df99e${_scopeId3}>${ssrInterpolate(displayStats.value.rate.toFixed(1))}%</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs text-gray-400" }, "詐騙率"),
                            createVNode("div", { class: "text-lg text-indigo-200" }, toDisplayString(displayStats.value.rate.toFixed(1)) + "%", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (filteredBatchResults.value.length) {
                    _push3(ssrRenderComponent(_component_UTable, {
                      rows: filteredBatchResults.value,
                      class: "mt-4",
                      columns: [
                        { key: "text", label: "訊息" },
                        { key: "is_scam", label: "結果" },
                        { key: "probability", label: "機率" },
                        { key: "risk_level", label: "風險" }
                      ]
                    }, {
                      "text-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(row.text?.slice(0, 40))}${ssrInterpolate(row.text?.length > 40 ? "..." : "")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(row.text?.slice(0, 40)) + toDisplayString(row.text?.length > 40 ? "..." : ""), 1)
                          ];
                        }
                      }),
                      "is_scam-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UBadge, {
                            color: row.is_scam ? "red" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(row.is_scam ? "詐騙" : "正常")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(row.is_scam ? "詐騙" : "正常"), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UBadge, {
                              color: row.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(row.is_scam ? "詐騙" : "正常"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ];
                        }
                      }),
                      "probability-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate((row.probability * 100).toFixed(1))}% `);
                        } else {
                          return [
                            createTextVNode(toDisplayString((row.probability * 100).toFixed(1)) + "% ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: batchText.value,
                      "onUpdate:modelValue": ($event) => batchText.value = $event,
                      rows: 6,
                      placeholder: "第一筆訊息\n第二筆訊息\n第三筆訊息",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-indigo-400/30 [&>textarea]:focus:border-indigo-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-2 mt-3 flex-wrap items-center" }, [
                      createVNode(_component_UButton, {
                        loading: batchLoading.value,
                        onClick: runBatch,
                        class: "fx-btn primary-btn bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("批量檢測")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        onClick: ($event) => {
                          batchText.value = "";
                          batchResults.value = [];
                          batchError.value = "";
                        },
                        class: "fx-btn bg-slate-800/80 text-slate-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "emerald",
                        variant: "soft",
                        disabled: !batchResults.value.length,
                        onClick: downloadCsv,
                        class: "fx-btn bg-emerald-500/20 text-emerald-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("下載 CSV")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_USelect, {
                        modelValue: batchFilter.value,
                        "onUpdate:modelValue": ($event) => batchFilter.value = $event,
                        options: [{ label: "全部", value: "all" }, { label: "只看詐騙", value: "scam" }, { label: "只看正常", value: "normal" }],
                        "option-attribute": "label",
                        "value-attribute": "value",
                        class: "w-36"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    batchLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-indigo-400/30 bg-indigo-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line indigo" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-10/12" }),
                        createVNode("span", { class: "skeleton-line w-8/12" }),
                        createVNode("span", { class: "skeleton-line w-11/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-indigo-200 px-3 py-2" }, "批次掃描中... 請稍候")
                    ])) : createCommentVNode("", true),
                    batchError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: batchError.value,
                      class: "mt-4"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    batchResults.value.length ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "grid grid-cols-2 md:grid-cols-4 gap-3 mt-4"
                    }, [
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-slate-700" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "總筆數"),
                          createVNode("div", { class: "text-lg text-slate-200" }, toDisplayString(displayStats.value.total), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-red-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "詐騙"),
                          createVNode("div", { class: "text-lg text-red-300" }, toDisplayString(displayStats.value.scam), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-emerald-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "正常"),
                          createVNode("div", { class: "text-lg text-emerald-300" }, toDisplayString(displayStats.value.normal), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-indigo-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "詐騙率"),
                          createVNode("div", { class: "text-lg text-indigo-200" }, toDisplayString(displayStats.value.rate.toFixed(1)) + "%", 1)
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    filteredBatchResults.value.length ? (openBlock(), createBlock(_component_UTable, {
                      key: 3,
                      rows: filteredBatchResults.value,
                      class: "mt-4",
                      columns: [
                        { key: "text", label: "訊息" },
                        { key: "is_scam", label: "結果" },
                        { key: "probability", label: "機率" },
                        { key: "risk_level", label: "風險" }
                      ]
                    }, {
                      "text-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString(row.text?.slice(0, 40)) + toDisplayString(row.text?.length > 40 ? "..." : ""), 1)
                      ]),
                      "is_scam-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.is_scam ? "red" : "green",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.is_scam ? "詐騙" : "正常"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "probability-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString((row.probability * 100).toFixed(1)) + "% ", 1)
                      ]),
                      _: 1
                    }, 8, ["rows"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (!chatOpen.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                class: "ai-chat-fab fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0",
                onClick: ($event) => chatOpen.value = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` AI 助手 `);
                  } else {
                    return [
                      createTextVNode(" AI 助手 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (chatOpen.value) {
              _push2(ssrRenderComponent(_component_UCard, { class: "f-card shimmer-card ai-follow-screen border border-cyan-300/20 bg-slate-900/80 backdrop-blur-xl" }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between gap-2" data-v-188df99e${_scopeId2}><div class="font-semibold text-cyan-200 tracking-wide" data-v-188df99e${_scopeId2}>AI 防詐問答助手</div>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "2xs",
                      color: "gray",
                      variant: "soft",
                      class: "fx-btn",
                      onClick: ($event) => chatOpen.value = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`收合`);
                        } else {
                          return [
                            createTextVNode("收合")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                        createVNode("div", { class: "font-semibold text-cyan-200 tracking-wide" }, "AI 防詐問答助手"),
                        createVNode(_component_UButton, {
                          size: "2xs",
                          color: "gray",
                          variant: "soft",
                          class: "fx-btn",
                          onClick: ($event) => chatOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("收合")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="ai-chat-layout" data-v-188df99e${_scopeId2}><div class="ai-live2d-slot" data-v-188df99e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Live2DDisplay, {
                      ref_key: "live2dRef",
                      ref: live2dRef,
                      "model-url": "/live2d/girl/mao_pro_zh/runtime/mao_pro.model3.json"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex-1 min-w-0" data-v-188df99e${_scopeId2}><div class="space-y-2 max-h-72 overflow-auto pr-1" data-v-188df99e${_scopeId2}><!--[-->`);
                    ssrRenderList(chatMessages.value, (m, i) => {
                      _push3(`<div class="${ssrRenderClass(["rounded-lg p-3 text-sm whitespace-pre-wrap", m.role === "user" ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-50 ml-8" : "bg-slate-950/60 border border-slate-700 text-slate-100 mr-8"])}" data-v-188df99e${_scopeId2}><div class="text-[11px] opacity-70 mb-1" data-v-188df99e${_scopeId2}>${ssrInterpolate(m.role === "user" ? "你" : "AI 助手")}</div><div data-v-188df99e${_scopeId2}>${ssrInterpolate(m.content)}</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                    if (chatError.value) {
                      _push3(ssrRenderComponent(_component_UAlert, {
                        color: "red",
                        variant: "soft",
                        title: chatError.value,
                        class: "mt-3"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="mt-3 flex gap-2 items-end" data-v-188df99e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: chatInput.value,
                      "onUpdate:modelValue": ($event) => chatInput.value = $event,
                      rows: 2,
                      placeholder: "例如：這則訊息為什麼被判定為詐騙？我該怎麼處理？",
                      class: "flex-1 [&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      loading: chatLoading.value,
                      class: "fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0",
                      onClick: sendChat
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` 發送 `);
                        } else {
                          return [
                            createTextVNode(" 發送 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "ai-chat-layout" }, [
                        createVNode("div", { class: "ai-live2d-slot" }, [
                          createVNode(_component_Live2DDisplay, {
                            ref_key: "live2dRef",
                            ref: live2dRef,
                            "model-url": "/live2d/girl/mao_pro_zh/runtime/mao_pro.model3.json"
                          }, null, 512)
                        ]),
                        createVNode("div", { class: "flex-1 min-w-0" }, [
                          createVNode("div", { class: "space-y-2 max-h-72 overflow-auto pr-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(chatMessages.value, (m, i) => {
                              return openBlock(), createBlock("div", {
                                key: i,
                                class: ["rounded-lg p-3 text-sm whitespace-pre-wrap", m.role === "user" ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-50 ml-8" : "bg-slate-950/60 border border-slate-700 text-slate-100 mr-8"]
                              }, [
                                createVNode("div", { class: "text-[11px] opacity-70 mb-1" }, toDisplayString(m.role === "user" ? "你" : "AI 助手"), 1),
                                createVNode("div", null, toDisplayString(m.content), 1)
                              ], 2);
                            }), 128))
                          ]),
                          chatError.value ? (openBlock(), createBlock(_component_UAlert, {
                            key: 0,
                            color: "red",
                            variant: "soft",
                            title: chatError.value,
                            class: "mt-3"
                          }, null, 8, ["title"])) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-3 flex gap-2 items-end" }, [
                            createVNode(_component_UTextarea, {
                              modelValue: chatInput.value,
                              "onUpdate:modelValue": ($event) => chatInput.value = $event,
                              rows: 2,
                              placeholder: "例如：這則訊息為什麼被判定為詐騙？我該怎麼處理？",
                              class: "flex-1 [&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UButton, {
                              loading: chatLoading.value,
                              class: "fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0",
                              onClick: sendChat
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 發送 ")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: "fx-particle-layer",
                "aria-hidden": "true"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(bgParticles.value, (p) => {
                  return openBlock(), createBlock("span", {
                    key: p.id,
                    class: "fx-particle",
                    style: { left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, opacity: p.op }
                  }, null, 4);
                }), 128))
              ]),
              modeBurstActive.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mode-burst",
                "aria-hidden": "true"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(modeParticles.value, (p) => {
                  return openBlock(), createBlock("span", {
                    key: `burst-${p.id}`,
                    class: "mode-dot",
                    style: { left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.dur}ms`, animationDelay: `${p.delay}ms`, background: `hsla(${p.hue}, 100%, 70%, .9)`, "--dx": `${p.dx}px`, "--dy": `${p.dy}px` }
                  }, null, 4);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "title-pin-section h-screen w-full flex items-center justify-center -mt-10 mb-20 relative z-20" }, [
                createVNode("div", { class: "text-center w-full max-w-4xl px-4 flex flex-col items-center" }, [
                  createVNode("h1", { class: "page-title text-5xl md:text-[8rem] font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-emerald-300 to-indigo-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] whitespace-nowrap" }, " 詐騙偵測器 "),
                  createVNode("p", { class: "hero-subtitle text-slate-300 mt-6 text-xl font-light tracking-widest hidden md:block" }, " Future Security Console · AI Scam Detection ")
                ])
              ]),
              createVNode("div", { class: "dashboard-content max-w-6xl mx-auto z-10 relative" }, [
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up mb-6 border border-cyan-400/25 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-18px_rgba(56,189,248,0.45)]",
                  style: { "--delay": ".06s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-cyan-200 tracking-wide" }, "單訊息檢測")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: text.value,
                      "onUpdate:modelValue": ($event) => text.value = $event,
                      rows: 5,
                      placeholder: "例如：恭喜中獎，請點擊連結領取獎品...",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-2 mt-3" }, [
                      createVNode(_component_UButton, {
                        loading: loading.value,
                        onClick: runPredict,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 開始檢測 ")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        onClick: ($event) => {
                          text.value = "";
                          result.value = null;
                          error.value = "";
                        },
                        class: "fx-btn bg-slate-800/80 text-slate-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 清空 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-cyan-400/30 bg-cyan-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-11/12" }),
                        createVNode("span", { class: "skeleton-line w-9/12" }),
                        createVNode("span", { class: "skeleton-line w-10/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-cyan-200 px-3 py-2" }, "掃描中... AI 正在分析詐騙特徵")
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex gap-2 mt-3 flex-wrap" }, [
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("恭喜您中獎，請立即點擊 bit.ly 領獎")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：中獎詐騙")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("您的帳戶異常，請回覆驗證碼")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：帳戶驗證")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "gray",
                        variant: "outline",
                        class: "fx-btn border-cyan-400/35 text-cyan-200",
                        onClick: ($event) => fillSample("今天晚上一起吃飯嗎？")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("範例：正常訊息")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    text.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-3 rounded-md border border-sky-400/25 bg-slate-950/40 p-3"
                    }, [
                      createVNode("div", { class: "text-xs text-slate-300 mb-2" }, [
                        createTextVNode("關鍵詞命中：" + toDisplayString(keywordHits.value.length) + " ", 1),
                        keywordHits.value.length ? (openBlock(), createBlock("span", { key: 0 }, "（" + toDisplayString(keywordHits.value.join("、")) + "）", 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", {
                        class: "text-sm text-slate-200 leading-7",
                        innerHTML: highlightedHtml.value
                      }, null, 8, ["innerHTML"])
                    ])) : createCommentVNode("", true),
                    error.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 2,
                      color: "red",
                      variant: "soft",
                      title: error.value,
                      class: "mt-4"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    result.value ? (openBlock(), createBlock(_component_UCard, {
                      key: 3,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isRiskHigh.value ? "risk-pulse border-red-400/45" : "border-cyan-400/20", riskShake.value ? "risk-shake" : "", singleSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-4" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: gaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(displayGauge.value) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "風險機率")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "判定"),
                            createVNode(_component_UBadge, {
                              class: isRiskHigh.value ? "badge-pulse" : "",
                              color: result.value.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(result.value.is_scam ? "詐騙" : "正常"), 1)
                              ]),
                              _: 1
                            }, 8, ["class", "color"])
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "詐騙機率"),
                            createVNode("div", null, toDisplayString(displayProbability.value.toFixed(1)) + "%", 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "風險等級"),
                            createVNode("div", null, toDisplayString(result.value.risk_level), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs text-gray-400" }, "風險描述"),
                            createVNode("div", null, toDisplayString(result.value.risk_description), 1)
                          ])
                        ]),
                        createVNode("div", { class: "mt-3" }, [
                          createVNode("div", { class: "text-xs text-slate-300 mb-1" }, "風險視覺化"),
                          createVNode(_component_UProgress, { value: displayGauge.value }, null, 8, ["value"])
                        ]),
                        createVNode("div", { class: "mt-3 text-slate-200" }, [
                          createVNode("b", { class: "text-cyan-300" }, "原因："),
                          createTextVNode(toDisplayString(result.value.reason || "—"), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up mb-6 border border-amber-400/20 bg-slate-900/70 backdrop-blur-xl",
                  style: { "--delay": ".1s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-amber-200 tracking-wide" }, "網址即時掃描")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode(_component_UInput, {
                        modelValue: urlInput.value,
                        "onUpdate:modelValue": ($event) => urlInput.value = $event,
                        placeholder: "貼上網址，例如 bit.ly/xxxx 或可疑登入頁面",
                        class: "flex-1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UButton, {
                        loading: urlLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: runUrlScan
                      }, {
                        default: withCtx(() => [
                          createTextVNode("掃描網址")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => urlInput.value = "www.google.com"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("安全測試")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    urlLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-amber-400/30 bg-amber-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-11/12" }),
                        createVNode("span", { class: "skeleton-line w-9/12" }),
                        createVNode("span", { class: "skeleton-line w-10/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-amber-200 px-3 py-2" }, "網址分析中... 正在檢查跳轉與假登入特徵")
                    ])) : createCommentVNode("", true),
                    urlError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: urlError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    urlResult.value ? (openBlock(), createBlock(_component_UCard, {
                      key: 2,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isUrlRiskHigh.value ? "risk-pulse border-red-400/45" : "border-amber-400/25", urlSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-2" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: urlGaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(urlResult.value.safety_score || 0)) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "URL 安全分數")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "text-slate-200" }, [
                          createTextVNode("主網域："),
                          createVNode("span", { class: "text-amber-200" }, toDisplayString(urlResult.value.host), 1)
                        ]),
                        createVNode("div", { class: "text-slate-200" }, [
                          createTextVNode("最終網址："),
                          createVNode("span", { class: "text-slate-300 break-all" }, toDisplayString(urlResult.value.final_url), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "text-slate-300" }, "風險評分：" + toDisplayString(urlResult.value.risk_score) + "/100", 1),
                          createVNode("span", { class: "text-slate-300" }, "安全分數：" + toDisplayString(urlResult.value.safety_score) + "/100", 1),
                          createVNode(_component_UBadge, {
                            color: urlResult.value.risk_level === "HIGH" ? "red" : urlResult.value.risk_level === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(urlResult.value.risk_level), 1)
                            ]),
                            _: 1
                          }, 8, ["color"]),
                          urlResult.value.redirected ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            color: "orange",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("偵測到跳轉")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          urlResult.value.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                            key: 1,
                            color: "emerald",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("白名單安全")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode(_component_UProgress, {
                          value: Math.round(urlResult.value.safety_score || 0),
                          color: "emerald"
                        }, null, 8, ["value"]),
                        urlResult.value.findings?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-slate-200"
                        }, [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "可疑特徵："),
                          createVNode("ul", { class: "list-disc pl-5 space-y-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(urlResult.value.findings, (f, i) => {
                              return openBlock(), createBlock("li", {
                                key: `url-f-${i}`
                              }, toDisplayString(f), 1);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up mb-6 border border-fuchsia-400/20 bg-slate-900/70 backdrop-blur-xl",
                  style: { "--delay": ".14s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-fuchsia-200 tracking-wide" }, "截圖辨識（OCR）")
                  ]),
                  default: withCtx(() => [
                    createVNode("input", {
                      ref_key: "ocrInputRef",
                      ref: ocrInputRef,
                      type: "file",
                      accept: "image/*",
                      class: "hidden",
                      onChange: onOcrUpload
                    }, null, 544),
                    createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                      createVNode(_component_UButton, {
                        loading: ocrLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: openOcrPicker
                      }, {
                        default: withCtx(() => [
                          createTextVNode("上傳截圖辨識")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => {
                          ocrResult.value = null;
                          ocrError.value = "";
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空結果")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", { class: "text-xs text-slate-400" }, "上傳聊天截圖後，系統會自動擷取文字並做風險分析 + AI 建議")
                    ]),
                    ocrLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "text-xs text-fuchsia-200 px-3 py-2" }, "OCR 辨識中... 請稍候")
                    ])) : createCommentVNode("", true),
                    ocrError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: ocrError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    ocrResult.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mt-4 grid gap-3"
                    }, [
                      createVNode(_component_UCard, { class: "bg-slate-950/60 border border-fuchsia-400/25" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "OCR 文字"),
                          createVNode("div", { class: "text-sm text-slate-200 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.text || "（未擷取到文字）"), 1)
                        ]),
                        _: 1
                      }),
                      ocrResult.value.predict ? (openBlock(), createBlock(_component_UCard, {
                        key: 0,
                        class: "bg-slate-950/60 border border-fuchsia-400/25"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "模型判定"),
                          createVNode("div", { class: "flex items-center gap-2 text-slate-200" }, [
                            createVNode(_component_UBadge, {
                              color: ocrResult.value.predict.is_scam ? "red" : "green",
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ocrResult.value.predict.is_scam ? "詐騙" : "正常"), 1)
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createVNode("span", null, "機率 " + toDisplayString((ocrResult.value.predict.probability * 100).toFixed(1)) + "%", 1),
                            createVNode("span", { class: "text-slate-400" }, toDisplayString(ocrResult.value.predict.risk_level) + " / " + toDisplayString(ocrResult.value.predict.risk_description), 1)
                          ]),
                          createVNode("div", { class: "mt-2 text-sm text-slate-300" }, toDisplayString(ocrResult.value.predict.reason), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UCard, { class: "bg-slate-950/60 border border-cyan-400/25" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-slate-400 mb-1" }, "AI 建議"),
                          createVNode("div", { class: "text-sm text-slate-100 whitespace-pre-wrap" }, toDisplayString(ocrResult.value.ai_answer), 1)
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up mb-6 border border-emerald-400/20 bg-slate-900/70 backdrop-blur-xl",
                  style: { "--delay": ".16s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-emerald-200 tracking-wide" }, "電話辨識")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: phoneInput.value,
                      "onUpdate:modelValue": ($event) => phoneInput.value = $event,
                      rows: 3,
                      placeholder: "貼上訊息內容（留空則自動用上方單訊息/OCR 文字）",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-emerald-400/30 [&>textarea]:focus:border-emerald-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "mt-3 flex gap-2" }, [
                      createVNode(_component_UButton, {
                        loading: phoneLoading.value,
                        class: "fx-btn primary-btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0",
                        onClick: runPhoneDetect
                      }, {
                        default: withCtx(() => [
                          createTextVNode("辨識電話")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => phoneInput.value = "0912345678"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("安全測試")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        class: "fx-btn bg-slate-800/80 text-slate-200",
                        onClick: ($event) => {
                          phoneInput.value = "";
                          phoneMatches.value = [];
                          phoneError.value = "";
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    phoneLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-emerald-400/30 bg-emerald-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-10/12" }),
                        createVNode("span", { class: "skeleton-line w-8/12" }),
                        createVNode("span", { class: "skeleton-line w-11/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-emerald-200 px-3 py-2" }, "電話辨識中... 正在分析號碼風險特徵")
                    ])) : createCommentVNode("", true),
                    phoneError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: phoneError.value,
                      class: "mt-3"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    phoneMatches.value.length ? (openBlock(), createBlock(_component_UCard, {
                      key: 2,
                      class: ["mt-4 border bg-slate-950/55 tilt-card shimmer-card", isPhoneRiskHigh.value ? "risk-pulse border-red-400/45" : "border-emerald-400/25", phoneSoftGlow.value ? "soft-result-glow" : ""],
                      style: tiltStyle.value,
                      onMousemove: onTiltMove,
                      onMouseleave: onTiltLeave
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-center mb-2" }, [
                          createVNode("div", {
                            class: "gauge-outer",
                            style: phoneGaugeStyle.value
                          }, [
                            createVNode("div", { class: "gauge-inner" }, [
                              createVNode("div", { class: "text-xl font-bold text-slate-100" }, toDisplayString(Math.round(phoneDashboard.value.safetyScore)) + "%", 1),
                              createVNode("div", { class: "text-[11px] text-slate-400" }, "電話安全分數")
                            ])
                          ], 4)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 text-sm text-slate-300" }, [
                          createVNode("span", null, "風險評分：" + toDisplayString(phoneDashboard.value.riskScore.toFixed(1)) + "/100", 1),
                          createVNode("span", null, "安全分數：" + toDisplayString(phoneDashboard.value.safetyScore.toFixed(1)) + "/100", 1),
                          createVNode(_component_UBadge, {
                            color: phoneDashboard.value.riskLevel === "HIGH" ? "red" : phoneDashboard.value.riskLevel === "MEDIUM" ? "yellow" : "green",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(phoneDashboard.value.riskLevel), 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        createVNode(_component_UProgress, {
                          value: Math.round(phoneDashboard.value.safetyScore),
                          color: "emerald",
                          class: "mb-2"
                        }, null, 8, ["value"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(phoneMatches.value, (m, i) => {
                          return openBlock(), createBlock(_component_UCard, {
                            key: `pm-${i}`,
                            class: "bg-slate-950/60 border border-emerald-400/20"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between gap-2 text-sm" }, [
                                createVNode("div", { class: "text-slate-100" }, toDisplayString(m.raw), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_UBadge, {
                                    color: "emerald",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UBadge, {
                                    color: m.risk_level === "HIGH" ? "red" : m.risk_level === "MEDIUM" ? "yellow" : "green",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.risk_level), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  m.is_whitelisted ? (openBlock(), createBlock(_component_UBadge, {
                                    key: 0,
                                    color: "emerald",
                                    variant: "soft"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("白名單安全")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "標準化：" + toDisplayString(m.normalized), 1),
                              createVNode("div", { class: "text-xs text-slate-400 mt-1" }, "安全分數：" + toDisplayString(m.safety_score) + "/100｜風險評分：" + toDisplayString(m.risk_score) + "/100", 1),
                              createVNode("div", { class: "text-xs text-slate-300 mt-1" }, toDisplayString(m.reason), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["class", "style"])) : !phoneLoading.value ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "mt-3 text-sm text-slate-400"
                    }, "尚未辨識到電話號碼")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up mb-6 border border-slate-500/25 bg-slate-900/60 backdrop-blur-xl",
                  style: { "--delay": ".12s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-slate-200 tracking-wide" }, "最近檢測紀錄")
                  ]),
                  default: withCtx(() => [
                    !historyItems.value.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-slate-400"
                    }, "尚無紀錄")) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-2 max-h-56 overflow-auto pr-1"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(historyItems.value, (item, idx) => {
                        return openBlock(), createBlock("button", {
                          key: idx,
                          class: "w-full text-left rounded-md border border-slate-700/80 bg-slate-950/50 hover:bg-slate-800/70 p-2 transition",
                          onClick: ($event) => useHistoryItem(item)
                        }, [
                          createVNode("div", { class: "flex items-center justify-between text-xs" }, [
                            createVNode("span", {
                              class: item.is_scam ? "text-red-300" : "text-emerald-300"
                            }, toDisplayString(item.is_scam ? "詐騙" : "正常"), 3),
                            createVNode("span", { class: "text-slate-400" }, toDisplayString(new Date(item.ts).toLocaleString()), 1)
                          ]),
                          createVNode("div", { class: "text-slate-200 text-sm truncate mt-1" }, toDisplayString(item.text), 1),
                          createVNode("div", { class: "text-slate-400 text-xs mt-1" }, "機率：" + toDisplayString((item.probability * 100).toFixed(1)) + "%", 1)
                        ], 8, ["onClick"]);
                      }), 128))
                    ]))
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UCard, {
                  class: "f-card shimmer-card enter-up border border-indigo-400/20 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_45px_-20px_rgba(99,102,241,0.45)]",
                  style: { "--delay": ".18s" }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "font-semibold text-indigo-200 tracking-wide" }, "批量檢測（每行一筆）")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: batchText.value,
                      "onUpdate:modelValue": ($event) => batchText.value = $event,
                      rows: 6,
                      placeholder: "第一筆訊息\n第二筆訊息\n第三筆訊息",
                      class: "[&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-indigo-400/30 [&>textarea]:focus:border-indigo-300"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex gap-2 mt-3 flex-wrap items-center" }, [
                      createVNode(_component_UButton, {
                        loading: batchLoading.value,
                        onClick: runBatch,
                        class: "fx-btn primary-btn bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 border-0"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("批量檢測")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        onClick: ($event) => {
                          batchText.value = "";
                          batchResults.value = [];
                          batchError.value = "";
                        },
                        class: "fx-btn bg-slate-800/80 text-slate-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("清空")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "emerald",
                        variant: "soft",
                        disabled: !batchResults.value.length,
                        onClick: downloadCsv,
                        class: "fx-btn bg-emerald-500/20 text-emerald-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("下載 CSV")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_USelect, {
                        modelValue: batchFilter.value,
                        "onUpdate:modelValue": ($event) => batchFilter.value = $event,
                        options: [{ label: "全部", value: "all" }, { label: "只看詐騙", value: "scam" }, { label: "只看正常", value: "normal" }],
                        "option-attribute": "label",
                        "value-attribute": "value",
                        class: "w-36"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    batchLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-3 rounded-md border border-indigo-400/30 bg-indigo-500/5 overflow-hidden"
                    }, [
                      createVNode("div", { class: "scan-line indigo" }),
                      createVNode("div", { class: "skeleton-grid px-3 pt-3 pb-1" }, [
                        createVNode("span", { class: "skeleton-line w-10/12" }),
                        createVNode("span", { class: "skeleton-line w-8/12" }),
                        createVNode("span", { class: "skeleton-line w-11/12" })
                      ]),
                      createVNode("div", { class: "text-xs text-indigo-200 px-3 py-2" }, "批次掃描中... 請稍候")
                    ])) : createCommentVNode("", true),
                    batchError.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 1,
                      color: "red",
                      variant: "soft",
                      title: batchError.value,
                      class: "mt-4"
                    }, null, 8, ["title"])) : createCommentVNode("", true),
                    batchResults.value.length ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "grid grid-cols-2 md:grid-cols-4 gap-3 mt-4"
                    }, [
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-slate-700" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "總筆數"),
                          createVNode("div", { class: "text-lg text-slate-200" }, toDisplayString(displayStats.value.total), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-red-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "詐騙"),
                          createVNode("div", { class: "text-lg text-red-300" }, toDisplayString(displayStats.value.scam), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-emerald-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "正常"),
                          createVNode("div", { class: "text-lg text-emerald-300" }, toDisplayString(displayStats.value.normal), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UCard, { class: "bg-slate-950/50 border border-indigo-400/30" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-xs text-gray-400" }, "詐騙率"),
                          createVNode("div", { class: "text-lg text-indigo-200" }, toDisplayString(displayStats.value.rate.toFixed(1)) + "%", 1)
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    filteredBatchResults.value.length ? (openBlock(), createBlock(_component_UTable, {
                      key: 3,
                      rows: filteredBatchResults.value,
                      class: "mt-4",
                      columns: [
                        { key: "text", label: "訊息" },
                        { key: "is_scam", label: "結果" },
                        { key: "probability", label: "機率" },
                        { key: "risk_level", label: "風險" }
                      ]
                    }, {
                      "text-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString(row.text?.slice(0, 40)) + toDisplayString(row.text?.length > 40 ? "..." : ""), 1)
                      ]),
                      "is_scam-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.is_scam ? "red" : "green",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.is_scam ? "詐騙" : "正常"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "probability-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString((row.probability * 100).toFixed(1)) + "% ", 1)
                      ]),
                      _: 1
                    }, 8, ["rows"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              !chatOpen.value ? (openBlock(), createBlock(_component_UButton, {
                key: 1,
                class: "ai-chat-fab fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0",
                onClick: ($event) => chatOpen.value = true
              }, {
                default: withCtx(() => [
                  createTextVNode(" AI 助手 ")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              chatOpen.value ? (openBlock(), createBlock(_component_UCard, {
                key: 2,
                class: "f-card shimmer-card ai-follow-screen border border-cyan-300/20 bg-slate-900/80 backdrop-blur-xl"
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                    createVNode("div", { class: "font-semibold text-cyan-200 tracking-wide" }, "AI 防詐問答助手"),
                    createVNode(_component_UButton, {
                      size: "2xs",
                      color: "gray",
                      variant: "soft",
                      class: "fx-btn",
                      onClick: ($event) => chatOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("收合")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "ai-chat-layout" }, [
                    createVNode("div", { class: "ai-live2d-slot" }, [
                      createVNode(_component_Live2DDisplay, {
                        ref_key: "live2dRef",
                        ref: live2dRef,
                        "model-url": "/live2d/girl/mao_pro_zh/runtime/mao_pro.model3.json"
                      }, null, 512)
                    ]),
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode("div", { class: "space-y-2 max-h-72 overflow-auto pr-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(chatMessages.value, (m, i) => {
                          return openBlock(), createBlock("div", {
                            key: i,
                            class: ["rounded-lg p-3 text-sm whitespace-pre-wrap", m.role === "user" ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-50 ml-8" : "bg-slate-950/60 border border-slate-700 text-slate-100 mr-8"]
                          }, [
                            createVNode("div", { class: "text-[11px] opacity-70 mb-1" }, toDisplayString(m.role === "user" ? "你" : "AI 助手"), 1),
                            createVNode("div", null, toDisplayString(m.content), 1)
                          ], 2);
                        }), 128))
                      ]),
                      chatError.value ? (openBlock(), createBlock(_component_UAlert, {
                        key: 0,
                        color: "red",
                        variant: "soft",
                        title: chatError.value,
                        class: "mt-3"
                      }, null, 8, ["title"])) : createCommentVNode("", true),
                      createVNode("div", { class: "mt-3 flex gap-2 items-end" }, [
                        createVNode(_component_UTextarea, {
                          modelValue: chatInput.value,
                          "onUpdate:modelValue": ($event) => chatInput.value = $event,
                          rows: 2,
                          placeholder: "例如：這則訊息為什麼被判定為詐騙？我該怎麼處理？",
                          class: "flex-1 [&>textarea]:bg-slate-950/70 [&>textarea]:text-slate-100 [&>textarea]:border-cyan-400/30 [&>textarea]:focus:border-cyan-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_UButton, {
                          loading: chatLoading.value,
                          class: "fx-btn bg-gradient-to-r from-cyan-500 to-indigo-500 border-0",
                          onClick: sendChat
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 發送 ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-188df99e"]]);
export {
  index as default
};
//# sourceMappingURL=index-BN84N3jo.js.map

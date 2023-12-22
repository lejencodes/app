"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9902],{81835:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=i(85893),r=i(11151);const o={id:"nvim-tree",title:"Nvim Tree",tags:["neovim","nvimtree"]},d=void 0,c={id:"editor/nvim-tree",title:"Nvim Tree",description:"Open the treeNvimTreeOpen",source:"@site/docs/editor/nvim-tree.md",sourceDirName:"editor",slug:"/editor/nvim-tree",permalink:"/docs/editor/nvim-tree",draft:!1,unlisted:!1,tags:[{label:"neovim",permalink:"/docs/tags/neovim"},{label:"nvimtree",permalink:"/docs/tags/nvimtree"}],version:"current",frontMatter:{id:"nvim-tree",title:"Nvim Tree",tags:["neovim","nvimtree"]},sidebar:"docsSidebar",previous:{title:"Editor",permalink:"/docs/category/editor"},next:{title:"Setup Neovim",permalink:"/docs/editor/setup-neovim"}},a={},s=[];function l(e){const n={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Open the tree:  ",(0,t.jsx)(n.code,{children:":NvimTreeOpen"})]}),"\n",(0,t.jsxs)(n.p,{children:["Show the mappings:  ",(0,t.jsx)(n.code,{children:"g?"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<C-]>"}),"           CD |nvim-tree-api.tree.change_root_to_node()|\n",(0,t.jsx)(n.code,{children:"<C-e>"}),"           Open: In Place |nvim-tree-api.node.open.replace_tree_buffer()|\n",(0,t.jsx)(n.code,{children:"<C-k>"}),"           Info |nvim-tree-api.node.show_info_popup()|\n",(0,t.jsx)(n.code,{children:"<C-r>"}),"           Rename: Omit Filename |nvim-tree-api.fs.rename_sub()|\n",(0,t.jsx)(n.code,{children:"<C-t>"}),"           Open: New Tab |nvim-tree-api.node.open.tab()|\n",(0,t.jsx)(n.code,{children:"<C-v>"}),"           Open: Vertical Split |nvim-tree-api.node.open.vertical()|\n",(0,t.jsx)(n.code,{children:"<C-x>"}),"           Open: Horizontal Split |nvim-tree-api.node.open.horizontal()|\n",(0,t.jsx)(n.code,{children:"<BS>"}),"            Close Directory |nvim-tree-api.node.navigate.parent_close()|\n",(0,t.jsx)(n.code,{children:"<CR>"}),"            Open |nvim-tree-api.node.open.edit()|\n",(0,t.jsx)(n.code,{children:"<Tab>"}),"           Open Preview |nvim-tree-api.node.open.preview()|\n",(0,t.jsx)(n.code,{children:">"}),"               Next Sibling |nvim-tree-api.node.navigate.sibling.next()|\n",(0,t.jsx)(n.code,{children:"<"}),"               Previous Sibling |nvim-tree-api.node.navigate.sibling.prev()|\n",(0,t.jsx)(n.code,{children:"."}),"               Run Command |nvim-tree-api.node.run.cmd()|\n",(0,t.jsx)(n.code,{children:"-"}),"               Up |nvim-tree-api.tree.change_root_to_parent()|\n",(0,t.jsx)(n.code,{children:"a"}),"               Create |nvim-tree-api.fs.create()|\n",(0,t.jsx)(n.code,{children:"bd"}),"              Delete Bookmarked |nvim-tree-api.marks.bulk.delete()|\n",(0,t.jsx)(n.code,{children:"bt"}),"              Trash Bookmarked |nvim-tree-api.marks.bulk.trash()|\n",(0,t.jsx)(n.code,{children:"bmv"}),"             Move Bookmarked |nvim-tree-api.marks.bulk.move()|\n",(0,t.jsx)(n.code,{children:"B"}),"               Toggle Filter: No Buffer |nvim-tree-api.tree.toggle_no_buffer_filter()|\n",(0,t.jsx)(n.code,{children:"c"}),"               Copy |nvim-tree-api.fs.copy.node()|\n",(0,t.jsx)(n.code,{children:"C"}),"               Toggle Filter: Git Clean |nvim-tree-api.tree.toggle_git_clean_filter()|\n",(0,t.jsx)(n.code,{children:"[c"}),"              Prev Git |nvim-tree-api.node.navigate.git.prev()|\n",(0,t.jsx)(n.code,{children:"]c"}),"              Next Git |nvim-tree-api.node.navigate.git.next()|\n",(0,t.jsx)(n.code,{children:"d"}),"               Delete |nvim-tree-api.fs.remove()|\n",(0,t.jsx)(n.code,{children:"D"}),"               Trash |nvim-tree-api.fs.trash()|\n",(0,t.jsx)(n.code,{children:"E"}),"               Expand All |nvim-tree-api.tree.expand_all()|\n",(0,t.jsx)(n.code,{children:"e"}),"               Rename: Basename |nvim-tree-api.fs.rename_basename()|\n",(0,t.jsx)(n.code,{children:"]e"}),"              Next Diagnostic |nvim-tree-api.node.navigate.diagnostics.next()|\n",(0,t.jsx)(n.code,{children:"[e"}),"              Prev Diagnostic |nvim-tree-api.node.navigate.diagnostics.prev()|\n",(0,t.jsx)(n.code,{children:"F"}),"               Clean Filter |nvim-tree-api.live_filter.clear()|\n",(0,t.jsx)(n.code,{children:"f"}),"               Filter |nvim-tree-api.live_filter.start()|\n",(0,t.jsx)(n.code,{children:"g?"}),"              Help |nvim-tree-api.tree.toggle_help()|\n",(0,t.jsx)(n.code,{children:"gy"}),"              Copy Absolute Path |nvim-tree-api.fs.copy.absolute_path()|\n",(0,t.jsx)(n.code,{children:"H"}),"               Toggle Filter: Dotfiles |nvim-tree-api.tree.toggle_hidden_filter()|\n",(0,t.jsx)(n.code,{children:"I"}),"               Toggle Filter: Git Ignore |nvim-tree-api.tree.toggle_gitignore_filter()|\n",(0,t.jsx)(n.code,{children:"J"}),"               Last Sibling |nvim-tree-api.node.navigate.sibling.last()|\n",(0,t.jsx)(n.code,{children:"K"}),"               First Sibling |nvim-tree-api.node.navigate.sibling.first()|\n",(0,t.jsx)(n.code,{children:"m"}),"               Toggle Bookmark |nvim-tree-api.marks.toggle()|\n",(0,t.jsx)(n.code,{children:"o"}),"               Open |nvim-tree-api.node.open.edit()|\n",(0,t.jsx)(n.code,{children:"O"}),"               Open: No Window Picker |nvim-tree-api.node.open.no_window_picker()|\n",(0,t.jsx)(n.code,{children:"p"}),"               Paste |nvim-tree-api.fs.paste()|\n",(0,t.jsx)(n.code,{children:"P"}),"               Parent Directory |nvim-tree-api.node.navigate.parent()|\n",(0,t.jsx)(n.code,{children:"q"}),"               Close |nvim-tree-api.tree.close()|\n",(0,t.jsx)(n.code,{children:"r"}),"               Rename |nvim-tree-api.fs.rename()|\n",(0,t.jsx)(n.code,{children:"R"}),"               Refresh |nvim-tree-api.tree.reload()|\n",(0,t.jsx)(n.code,{children:"s"}),"               Run System |nvim-tree-api.node.run.system()|\n",(0,t.jsx)(n.code,{children:"S"}),"               Search |nvim-tree-api.tree.search_node()|\n",(0,t.jsx)(n.code,{children:"u"}),"               Rename: Full Path |nvim-tree-api.fs.rename_full()|\n",(0,t.jsx)(n.code,{children:"U"}),"               Toggle Filter: Hidden |nvim-tree-api.tree.toggle_custom_filter()|\n",(0,t.jsx)(n.code,{children:"W"}),"               Collapse |nvim-tree-api.tree.collapse_all()|\n",(0,t.jsx)(n.code,{children:"x"}),"               Cut |nvim-tree-api.fs.cut()|\n",(0,t.jsx)(n.code,{children:"y"}),"               Copy Name |nvim-tree-api.fs.copy.filename()|\n",(0,t.jsx)(n.code,{children:"Y"}),"               Copy Relative Path |nvim-tree-api.fs.copy.relative_path()|\n",(0,t.jsx)(n.code,{children:"<2-LeftMouse>"}),"   Open |nvim-tree-api.node.open.edit()|\n",(0,t.jsx)(n.code,{children:"<2-RightMouse>"}),"  CD |nvim-tree-api.tree.change_root_to_node()|"]}),"\n",(0,t.jsx)(n.p,{children:"=============================================================================="}),"\n",(0,t.jsx)(n.p,{children:"CTRL-W h move to the window on the left\nCTRL-W j move to the window below\nCTRL-W k move to the window above\nCTRL-W l move to the window on the right"}),"\n",(0,t.jsx)(n.p,{children:"CTRL-W t move to the TOP window\nCTRL-W b move to the BOTTOM window"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>d});var t=i(67294);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
import { TranslationMessages } from 'ra-core';

const englishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: '增加检索',
            add: '增加',
            back: '回退',
            bulk_actions: '选中%{smart_count}项',
            cancel: '取消',
            clear_array_input: 'Clear the list',
            clear_input_value: '清空输入',
            clone: '克隆',
            confirm: '确认',
            create: '新建',
            create_item: 'Create %{item}',
            delete: '删除',
            edit: '编辑',
            export: '导出',
            list: '列表',
            refresh: '刷新',
            remove_filter: '移除检索',
            remove_all_filters: 'Remove all filters',
            remove: '删除',
            save: '保存',
            search: '检索',
            select_all: 'Select all',
            select_row: 'Select this row',
            show: '查看',
            sort: '排序',
            undo: '撤销',
            unselect: '反选',
            expand: '展开',
            close: '关闭',
            open_menu: '打开菜单',
            close_menu: '关闭菜单',
            update: 'Update',
            move_up: 'Move up',
            move_down: 'Move down',
            open: 'Open',
            toggle_theme: 'Toggle Theme',
            select_columns: 'Columns',
        },
        boolean: {
            true: '是',
            false: '否',
            null: ' ',
        },
        page: {
            create: '新建 %{name}',
            dashboard: '概览',
            edit: '%{name} %{recordRepresentation}',
            error: '出现错误',
            list: '%{name} 列表',
            loading: '加载中',
            not_found: '未发现',
            show: '%{name} %{recordRepresentation}',
            empty: '无 %{name} ',
            invite: '要增加吗?',
        },
        input: {
            file: {
                upload_several:
                    '将文件集合拖拽到这里, 或点击这里选择文件集合.',
                upload_single: '将文件拖拽到这里, 或点击这里选择文件.',
            },
            image: {
                upload_several:
                    '将图片文件集合拖拽到这里, 或点击这里选择图片文件集合.',
                upload_single:
                    '将图片文件拖拽到这里, 或点击这里选择图片文件.',
            },
            references: {
                all_missing: '未找到参考数据.',
                many_missing:
                    '至少有一条参考数据不再可用.',
                single_missing:
                    '关联的参考数据不再可用.',
            },
            password: {
                toggle_visible: '隐藏密码',
                toggle_hidden: '显示密码',
            },
        },
        message: {
            about: '关于',
            are_you_sure: '您确定操作?',
            auth_error:
                'A error occurred while validating the authentication token.',
            bulk_delete_content:
                '您确定要删除 %{name}? |||| 您确定要删除 %{smart_count} 项?',
            bulk_delete_title:
                '删除 %{name} |||| 删除 %{smart_count}项 %{name} ',
            bulk_update_content:
                'Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?',
            bulk_update_title:
                'Update %{name} |||| Update %{smart_count} %{name}',
            clear_array_input: 'Are you sure you want to clear the whole list?',
            delete_content: '您确定要删除该条目?',
            delete_title: '删除 %{name} #%{id}',
            details: 'Details',
            error:
                "客户端错误导致请求未完成.",

            invalid_form: '表单输入无效. 请检查错误提示',
            loading: '正在加载页面, 请稍候',
            no: '否',
            not_found:
                '您输入了错误的URL或者错误的链接.',
            yes: '是',
            unsaved_changes:
                "修改未保存. 放弃修改吗?",
        },
        navigation: {
            no_results: '结果为空',
            no_more_results:
                '页码 %{page} 超出边界. 试试上一页.',
            page_out_of_boundaries: '页码 %{page} 超出边界',
            page_out_from_end: '已到最末页',
            page_out_from_begin: '已到最前页',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}',
            current_page: 'Page %{page}',
            page: 'Go to page %{page}',
            first: 'Go to first page',
            last: 'Go to last page',
            next: '向后',
            previous: 'Go to previous page',
            page_rows_per_page: '每页行数:',
            skip_nav: '跳到内容',
        },
        sort: {
            sort_by: '按 %{field} %{order}',
            ASC: '升序',
            DESC: '降序',
        },
        auth: {
            auth_check_error: '请登录以继续',
            user_menu: '设置',
            username: '用户名',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '验证失败, 请重试',
            logout: '退出',
        },
        notification: {
            updated: '条目已更新 |||| %{smart_count} 项条目已更新',
            created: '条目已新建',
            deleted: '条目已删除 |||| %{smart_count} 项条目已删除',
            bad_item: '不正确的条目',
            item_doesnt_exist: '条目不存在',
            http_error: '与服务通信出错',
            data_provider_error:
                'dataProvider错误. 请检查console的详细信息.',
            i18n_error:
                '无法加载指定语言包',
            canceled: '取消动作',
            logged_out: '会话失效, 请重连.',
            not_authorized: "You're not authorized to access this resource.",
        },
        validation: {
            required: '必填',
            minLength: '必须不少于 %{min} 个字符',
            maxLength: '必须不多于 %{max} 个字符',
            minValue: '必须不小于 %{min}',
            maxValue: '必须不大于 %{max}',
            number: '必须为数字',
            email: '必须是有效的邮箱',
            oneOf: '必须为: %{options}其中一项',
            regex: '必须符合指定的格式 (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Saved queries',
            query_name: 'Query name',
            new_label: 'Save current query...',
            new_dialog_title: 'Save current query as',
            remove_label: 'Remove saved query',
            remove_label_with_name: 'Remove query "%{name}"',
            remove_dialog_title: 'Remove saved query?',
            remove_message:
                'Are you sure you want to remove that item from your list of saved queries?',
            help: 'Filter the list and save this query for later',
        },
        configurable: {
            customize: 'Customize',
            configureMode: 'Configure this page',
            inspector: {
                title: 'Inspector',
                content: 'Hover the application UI elements to configure them',
                reset: 'Reset Settings',
                hideAll: 'Hide All',
                showAll: 'Show All',
            },
            Datagrid: {
                title: 'Datagrid',
                unlabeled: 'Unlabeled column #%{column}',
            },
            SimpleForm: {
                title: 'Form',
                unlabeled: 'Unlabeled input #%{input}',
            },
            SimpleList: {
                title: 'List',
                primaryText: 'Primary text',
                secondaryText: 'Secondary text',
                tertiaryText: 'Tertiary text',
            },
        },
    },
};

export default englishMessages;

import { TranslationMessages } from 'ra-core';
const chineseMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: '增加检索',
            add: '增加',
            back: '回退',
            bulk_actions: '选中%{smart_count}项',
            cancel: '取消',
            clear_input_value: '清除数据',
            clone: '克隆',
            confirm: '提交',
            create: '新建',
            delete: '删除',
            edit: '编辑',
            export: '导出',
            list: '列表',
            refresh: '刷新',
            remove_filter: '移除检索',
            remove: '删除',
            save: '保存',
            search: '检索',
            show: '查看',
            sort: '排序',
            undo: '撤销',
            expand: '打开',
            close: '关闭',
            open_menu: '打开菜单',
            close_menu: '关闭菜单',
        },
        boolean: {
            true: '是',
            false: '否',
            null: '',
        },
        page: {
            create: '新建 %{name}',
            dashboard: '概览',
            edit: '%{name} #%{id}',
            error: '出现错误',
            list: '%{name} 列表',
            loading: '加载中',
            not_found: '未发现',
            show: '%{name} #%{id}',
            empty: '%{name} 为空.',
            invite: '需要新增一个吗?',
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
            bulk_delete_content:
                '您确定要删除 %{name}? |||| 您确定要删除 %{smart_count} 项?',
            bulk_delete_title:
                '删除 %{name} |||| 删除 %{smart_count}项 %{name} ',
            delete_content: '您确定要删除该条目?',
            delete_title: '删除 %{name} #%{id}',
            details: 'Details',
            error:
                "A client error occurred and your request couldn't be completed.",
            invalid_form: '表单输入无效. 请检查错误提示',
            loading: '正在加载页面, 请稍候',
            no: '否',
            not_found:
                '您输入了错误的URL或者错误的链接.',
            yes: '是',
            unsaved_changes:
                "有些变更没有保存. 你确定要忽略吗?",
        },
        navigation: {
            no_results: '结果为空',
            no_more_results:
                '页码 %{page} 超出边界. 试试上一页.',
            page_out_of_boundaries: '页码 %{page} 超出边界',
            page_out_from_end: '已到最末页',
            page_out_from_begin: '已到最前页',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: '每页行数:',
            next: '向后',
            prev: '向前',
        },
        auth: {
            auth_check_error: '请登录并继续',
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
            canceled: '取消动作',
            data_provider_error:'dataProvider错误. 请检查console的详细信息.',
            i18n_error:
                '无法加载指定语言翻译',
            logged_out: '您的回话已经结束,请重新连接.',

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
    },
}

export default chineseMessages;
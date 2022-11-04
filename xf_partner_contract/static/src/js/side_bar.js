/** @odoo-module **/

    import ActionMenus from "web.ActionMenus";
    import { patch } from 'web.utils';

//    console.log("ooooooo",ActionMenu);
//    const Context = require('web.Context');
//    const DropdownMenu = require('web.DropdownMenu');
    patch(ActionMenus.prototype, 'xf_partner_contract/static/src/js/side_bar.js', {
        async _setPrintItems(props) {
            if (this.env.view.base_model === "account.move") {
                props.items.print = [];
            }
            return this._super(...arguments)
        }
    })

//});
/**
 * Created by claudio on 19/06/17.
 */

@registerDynamicValueClass
class CatenisMsgDirectionSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisMsgDirectionSelectDynValue';
    static title = 'Catenis Message Direction Selection';
    static inputs = [
        DynamicValueInput('direction', 'Direction', "Select", {
            "choices": {
                "inbound": "1 - Inbound",
                "outbound": "2 - Outbound",
                "any": "3 - Any"
            }
        })
    ];

    evaluate(context) {
        return this.direction;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.direction;
    }
}

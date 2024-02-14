export class MMWhite extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "w";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace1_inChat.webp" />',
            "2": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace2_inChat.webp" />',
            "3": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace3_inChat.webp" />',
            "4": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace4_inChat.webp" />',
			"5": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace5_inChat.webp" />',			
            "6": '<img src="modules/memento-mori-csb-enit/assets/images/WhiteFace6_inChat.webp" />'
        }[result.result];
    }
}

export class MMBlack extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "b";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace1_inChat.webp" />',
            "2": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace2_inChat.webp" />',
            "3": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace3_inChat.webp" />',
            "4": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace4_inChat.webp" />',
			"5": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace5_inChat.webp" />',			
            "6": '<img src="modules/memento-mori-csb-enit/assets/images/BlackFace6_inChat.webp" />'
        }[result.result];
    }
}
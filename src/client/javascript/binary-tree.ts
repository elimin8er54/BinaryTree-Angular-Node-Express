class TreeNode {

    public _value: number;
    public _left: TreeNode | null;
    public _right: TreeNode | null;
    constructor(_value: number) {
        this._value = _value;
        this._left = null;
        this._right = null;
    }

}

export enum Order {
    Pre,
    In,
    Post

}


export class BinaryTree {

    private _root: TreeNode | null;

    constructor() {
        this._root = null;
    }

    public add(value: number, callback: (val: TreeNode) => void) {
        this._root = this._addNode(value, this._root, callback);
    }

    private _addNode(value: number, node: TreeNode | null, callback: (val: TreeNode) => void): TreeNode {
        if (node === null) {
            const tree = new TreeNode(value);

            callback(tree);
            return tree;
        }

        if (value < node._value) {
            node._left = this._addNode(value, node._left, callback);

            callback(node);

        } else if (value > node._value) {
            node._right = this._addNode(value, node._right, callback);

            callback(node);
        }

        return node;
    }

    public delete(value: number) {
        this._root = this._deleteNode(value, this._root);
    }


    private _deleteNode(value: number, node: TreeNode | null): TreeNode | null {

        if (node === null) {
            return null;
        }

        if (value < node._value) {
            node._right = this._deleteNode(value, node._left);
        } else if (value > node._value) {
            node._left = this._deleteNode(value, node._right);
        } else {
            if (node._left === null) {
                return node._right;
            } else if (node._right === null) {
                return node._left;
            }

            node._value = this.findMinVal(node._right);

            node._right = this._deleteNode(node._value, node._right);
        }
        return node;

    }

    findMin() {
        return this.findMinVal(this._root);
    }

    findMinVal(node: TreeNode | null): number {
        if (node === null) {
            return -1;
        }
        if (node._left === null)
            return node._value;
        return this.findMinVal(node._left);
    }

    public findMax() {
        return this._findMaxVal(this._root);
    }

    private _findMaxVal(node: TreeNode | null): number {
        if (node === null) {
            return -1;
        }
        if (node._right === null)
            return node._value;
        return this._findMaxVal(node._right);
    }


    //This takes a call back so the user can choose what to do with the values
    public traverse(orderType: Order, callback: (val: TreeNode) => void) {
        this._traverseTree(this._root, orderType, callback);
    }

    private _traverseTree(node: TreeNode | null, orderType: Order, callback: (val: TreeNode) => void): void {
        if (node !== null) {
            switch (orderType) {
                case Order.Pre:
                    callback(node); this._traverseTree(node._left, orderType, callback); this._traverseTree(node._right, orderType, callback);
                    break;
                case Order.In:
                    this._traverseTree(node._left, orderType, callback); callback(node); this._traverseTree(node._right, orderType, callback);
                    break;
                case Order.Post:
                    this._traverseTree(node._left, orderType, callback); this._traverseTree(node._right, orderType, callback); callback(node);
                    break;
            }

        }
    }



    public depth() {
        return this._depthTree(this._root);
    }

    private _depthTree(node: TreeNode | null) {

        if (node === null)
            return 0;

        let leftDepth: number = this._depthTree(node._left);
        let rightDepth: number = this._depthTree(node._right);


        if (leftDepth > rightDepth)
            return (leftDepth + 1);
        else
            return (rightDepth + 1);
    }


}
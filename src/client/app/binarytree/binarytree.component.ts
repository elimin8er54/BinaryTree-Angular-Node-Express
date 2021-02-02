import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BinaryTree, Order } from '../../javascript/binary-tree';


@Component({
  selector: 'app-binarytree',
  templateUrl: './binarytree.component.html',
  styleUrls: ['./binarytree.component.css']
})
export class BinarytreeComponent implements OnInit {
  nodes: { [k: string]: number | string }[] = [];

  tree: BinaryTree;

  constructor() {
    this.tree = new BinaryTree();
  }

  addNode(value: string) {

    const parsedValue = parseInt(value, 10);

    if (!parsedValue || parsedValue < 0) return;
    //We add the node to the actual binary tree (This is the non visual aspect)
    let depth = 0;
    let x = 0;
    let parent: { key: number, x: number, y: number };
    let i = 0;
    let tempNodes: any = [];
    let showLeft = "none";
    let showRight = "none";
    this.tree.add(parsedValue, (node) => {
      tempNodes.push(node);

    });
    //We reverse since recursion is backwards
    const reversedNodes = tempNodes.reverse();
    reversedNodes.forEach((node: any) => {

      if (this.nodes.length === 0) {
        this.nodes.push({ showRight: showRight, showLeft: showLeft, key: node._value, x: x, y: depth });

      } else if (i > 0) {
        {
          if (node._value < parent.key) {
            showLeft = "initial";
            showRight = "none";
            x -= 100;
          } else if (node._value > parent.key) {
            x += 100;
            showLeft = "none";
            showRight = "initial";
          }
          depth += 100;

          if (node._value === parsedValue) {
            this.nodes.push({ showRight: showRight, showLeft: showLeft, key: node._value, x: x, y: depth });
          }
        }
      }
      parent = { key: node._value, x: x, y: depth };
      i++;
    });
  }

  ngOnInit(): void {


  }

}

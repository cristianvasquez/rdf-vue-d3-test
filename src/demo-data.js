import {ns} from './namespaces'
import rdf from 'rdf-ext'
import clownface from 'clownface'

const shape = clownface({ dataset: rdf.dataset(), factory: rdf })
  .node(ns.ex.PersonShape)
  .addOut(ns.rdf.type, ns.sh.NodeShape)
  .addOut(ns.rdfs.label, 'Person shape')
  .addOut(ns.rdfs.comment, 'Defines the structure of a person')
  .addOut(ns.sh.targetClass, ns.schema.Person)
  .addOut(ns.sh.property, ns.ex.PersonShape_givenName, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.givenName)
      .addOut(ns.sh.name, rdf.literal('First name', 'en'))
      .addOut(ns.sh.name, rdf.literal('Prénom', 'fr'))
  })
  .addOut(ns.sh.property, ns.ex.PersonShape_familyName, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.familyName)
      .addOut(ns.sh.name, rdf.literal('Last name', 'en'))
      .addOut(ns.sh.name, rdf.literal('Nom', 'fr'))
  })
  .addOut(ns.sh.property, ns.ex.PersonShape_address, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.address)
      .addOut(ns.dash.editor, ns.dash.DetailsEditor)
      .addOut(ns.sh.node, ns.ex.AustralianAddressShape)
      .addOut(ns.sh.class, ns.schema.PostalAddress)
      .addOut(ns.sh.nodeKind, ns.sh.IRI)
      .addOut(ns.sh.name, rdf.literal('Address'))
  })
  .addOut(ns.sh.property, ns.ex.PersonShape_comment, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.description)
      .addOut(ns.dash.singleLine, rdf.literal('false', ns.xsd.boolean))
      .addOut(ns.sh.name, rdf.literal('Comment', 'en'))
  })

shape
  .node(ns.ex.AustralianAddressShape)
  .addOut(ns.rdf.type, ns.sh.NodeShape)
  .addOut(ns.rdfs.label, 'Australian address shape')
  .addOut(ns.rdfs.comment, 'Defines the structure of addresses in Australia, stored using schema.org.')
  .addOut(ns.sh.targetClass, ns.schema.PostalAddress)
  .addOut(ns.dash.defaultViewForRole, ns.dash.all)
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_streetAddress, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.streetAddress)
      .addOut(ns.dash.editor, ns.dash.TextAreaEditor)
      .addOut(ns.dash.singleLine, rdf.literal('false', ns.xsd.boolean))
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.group, ns.ex.AddressPropertyGroup)
      .addOut(ns.sh.maxCount, rdf.literal('1', ns.xsd.int))
      .addOut(ns.sh.name, rdf.literal('street address'))
      .addOut(ns.sh.order, rdf.literal('0', ns.xsd.decimal))
  })
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_addressLocality, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.addressLocality)
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.group, ns.ex.AddressPropertyGroup)
      .addOut(ns.sh.maxCount, rdf.literal(1, ns.xsd.int))
      .addOut(ns.sh.name, rdf.literal('suburb'))
      .addOut(ns.sh.order, rdf.literal('1', ns.xsd.decimal))
  })
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_addressRegion, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.addressRegion)
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.description, rdf.literal('The abbreviation of the state or territory.'))
      .addOut(ns.sh.group, ns.ex.AddressPropertyGroup)
      .addOut(ns.sh.in, ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'])
      .addOut(ns.sh.minCount, rdf.literal('1', ns.xsd.int))
      .addOut(ns.sh.maxCount, rdf.literal('1', ns.xsd.int))
      .addOut(ns.sh.name, rdf.literal('state'))
      .addOut(ns.sh.order, rdf.literal('2', ns.xsd.decimal))
  })
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_postalCode, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.postalCode)
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.description, rdf.literal('An Australian postal code, between 0000 and 9999.'))
      .addOut(ns.sh.group, ns.ex.AddressPropertyGroup)
      .addOut(ns.sh.minCount, rdf.literal('1', ns.xsd.int))
      .addOut(ns.sh.maxCount, rdf.literal('1', ns.xsd.int))
      .addOut(ns.sh.minLength, rdf.literal('4', ns.xsd.int))
      .addOut(ns.sh.maxLength, rdf.literal('4', ns.xsd.int))
      .addOut(ns.sh.name, rdf.literal('postal code'))
      .addOut(ns.sh.order, rdf.literal('3', ns.xsd.decimal))
      .addOut(ns.sh.pattern, rdf.literal('[0-9][0-9][0-9][0-9]'))
  })
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_email, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.email)
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.group, ns.ex.ContactPropertyGroup)
      .addOut(ns.sh.name, rdf.literal('email'))
      .addOut(ns.sh.nodeKind, ns.sh.Literal)
      .addOut(ns.sh.order, rdf.literal('1', ns.xsd.decimal))
  })
  .addOut(ns.sh.property, ns.ex.AustralianAddressShape_telephone, property => {
    property
      .addOut(ns.rdf.type, ns.sh.PropertyShape)
      .addOut(ns.sh.path, ns.schema.telephone)
      .addOut(ns.sh.datatype, ns.xsd.string)
      .addOut(ns.sh.group, ns.ex.ContactPropertyGroup)
      .addOut(ns.sh.name, rdf.literal('phone number'))
      .addOut(ns.sh.order, rdf.literal('2', ns.xsd.decimal))
  })

clownface({ dataset: shape.dataset, factory: rdf })
  .node(ns.ex.AddressPropertyGroup)
  .addOut(ns.rdf.type, ns.sh.PropertyGroup)
  .addOut(ns.rdfs.label, rdf.literal('Address', 'en'))
  .addOut(ns.sh.order, rdf.literal('0', ns.xsd.decimal))

clownface({ dataset: shape.dataset, factory: rdf })
  .node(ns.ex.ContactPropertyGroup)
  .addOut(ns.rdf.type, ns.sh.PropertyGroup)
  .addOut(ns.rdfs.label, rdf.literal('Contact', 'en'))
  .addOut(ns.rdfs.label, rdf.literal('Kontact', 'de'))
  .addOut(ns.sh.order, rdf.literal('1', ns.xsd.decimal))


const data = clownface({ dataset: rdf.dataset(), factory: rdf })
  .node(ns.ex.aPerson)
  .addOut(ns.schema.address, ns.ex.anAddress, address => {
    address
      .addOut(ns.rdf.type, ns.schema.PostalAddress)
      .addOut(ns.schema.streetAddress, rdf.literal('3 Teewah Close'))
      .addOut(ns.schema.addressLocality, rdf.literal('Kewarra Beach'))
      .addOut(ns.schema.addressRegion, rdf.literal('QLD'))
      .addOut(ns.schema.postalCode, rdf.literal('4879'))
      .addOut(ns.schema.email, rdf.literal('alice@example.com'))
      .addOut(ns.schema.email, rdf.literal('alice2234@example.com'))
      .addOut(ns.rdfs.label, rdf.literal('Holger\'s Address'))
  })
  .addOut(ns.schema.description, rdf.literal('Hello'))
  .addOut(ns.schema.description, rdf.literal('cześć', 'pl'))

export {data,shape}
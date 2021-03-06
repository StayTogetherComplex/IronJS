// <auto-generated />
namespace IronJS.Tests.UnitTests.Sputnik.Conformance.Expressions.PrimaryExpressions
{
    using System;
    using NUnit.Framework;

    [TestFixture]
    public class IdentifierReferenceTests : SputnikTestFixture
    {
        public IdentifierReferenceTests()
            : base(@"Conformance\11_Expressions\11.1_Primary_Expressions\11.1.2_Identifier_Reference")
        {
        }

        [Test]
        [Category("Sputnik Conformance")]
        [Category("ECMA 11.1.2")]
        [TestCase("S11.1.2_A1_T1.js", Description = "The result of evaluating an Identifier is always a value of type Reference")]
        [TestCase("S11.1.2_A1_T2.js", Description = "The result of evaluating an Identifier is always a value of type Reference")]
        public void TheResultOfEvaluatingAnIdentifierIsAlwaysAValueOfTypeReference(string file)
        {
            RunFile(file);
        }
    }
}